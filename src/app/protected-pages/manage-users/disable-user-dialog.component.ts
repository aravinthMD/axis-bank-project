import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BUTTON_TEXTS, TOASTER_MESSAGES } from "src/app/shared/utils/constant";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-disable-user-dialog",
  templateUrl: "./disable-user-dialog.component.html",
  styleUrls: ["./disable-user-dialog.component.scss"],
})
export class DisableUserDialogComponent implements OnInit {
  @Input() userId: number;
  @Input() userName: string;

  disableButtonText = BUTTON_TEXTS.DISABLE_BUTTON_TEXT;
  cancelButtonText = BUTTON_TEXTS.CANCEL_BUTTON_TEXT;

  loading = false;

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private userService: UserService,
    private toasterService: ToasterService
  ) { }

  ngOnInit(): void { }

  disableUser(): void {
    this.loading = true;
    const currentUserId = this.userService.currentUserValue.userId;
    this.userService
      .disableUserById(this.userId, Number(currentUserId))
      .subscribe((response) => {
        if (response) {
          const {
            ProcessVariables: { status },
            ProcessVariables: { message = {} },
          } = response;
          if (status) {
            this.toasterService.show(TOASTER_MESSAGES.DISABLE_USER_SUCCESS, {
              classname: "bg-success text-light",
            });
            this.close("SUCCESS");
            this.loading = false;
          } else {
            this.toasterService.show(message.value, {
              classname: "bg-danger text-light",
            });
            this.loading = false;
          }
        } else {
          this.loading = false;
          this.close();
          this.userService.closeAndLogout();
        }
      });
  }

  close(message?: string): void {
    this.ngbActiveModal.close(message);
  }
}

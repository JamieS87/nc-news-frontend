import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  IconButton,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteComment } from "../utils/api";

export default function CommentDeleter({ comment_id, setComments }) {
  const [isPending, setIsPending] = useState(false);
  const [open, setIsOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(false);

  async function handleConfirm() {
    try {
      setIsPending(true);
      await deleteComment(comment_id);
      setIsPending(false);
      setDeleted(true);
    } catch (err) {
      setIsOpen(false);
      setIsPending(false);
      setDeleted(false);
      setError(err);
    }
  }

  function handleCloseDeleteSuccess() {
    //Remove comment from comment list only after closing the deletion success dialog.
    //If we remove the comment before, the component will be unmounted
    //before we get a chance to show it.
    setComments((currComments) => {
      return currComments.filter(
        (comment) => comment.comment_id !== comment_id
      );
    });
  }

  const PendingDialog = (
    <Dialog open={isPending}>
      <DialogTitle color="info">Deleting Comment</DialogTitle>
      <DialogContent>
        <DialogContentText>Please wait...</DialogContentText>
      </DialogContent>
    </Dialog>
  );

  const DeleteSuccessDialog = (
    <Dialog open={deleted}>
      <DialogTitle color="success">Success!</DialogTitle>
      <DialogContent>
        <DialogContentText>Comment successfully deleted</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          aria-label="close delete success dialog"
          onClick={() => {
            handleCloseDeleteSuccess();
          }}
          variant="contained"
          color="primary"
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );

  const ErrorDialog = (
    <Dialog open={Boolean(error)}>
      <DialogTitle color="error">Error Deleting Comment</DialogTitle>
      <DialogContent>
        <DialogContentText>
          An error occurred while deleting your comment
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          aria-label="close comment deletion error dialog"
          onClick={() => {
            setError(null);
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)} aria-label="delete comment">
        <DeleteIcon />
      </IconButton>
      {/* if error is truthy, show error dialog */}
      {(error && ErrorDialog) ||
        /* or if isPending is truthy, show pending dialog */
        (isPending && PendingDialog) ||
        /* or if deleted is truthy, show delete success dialog */
        (deleted && DeleteSuccessDialog) || (
          /* or if none of the above are true, show delete confirmation dialog */
          <Dialog open={open}>
            <DialogTitle>Delete Comment</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete your comment?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setIsOpen(false)}
                aria-label="cancel comment deletion"
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleConfirm()}
                aria-label="confirm comment deletion"
                variant="contained"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        )}
    </>
  );
}

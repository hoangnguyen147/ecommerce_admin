import React from "react"
import { useSelector } from "react-redux"

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import Backdrop from "@material-ui/core/Backdrop"
import LinearProgress from "@material-ui/core/LinearProgress"

// selectors
import { isLoadingSelector } from "redux/selectors/app.selector"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "20%",
      backgroundColor: theme.palette.primary.light,
      padding: "8px 16px",
      "& span": {
        display: "block",
      },
      "& > * + *": {
        marginTop: theme.spacing(1),
      },
      // zIndex: 3000,
      // position: 'absolute',
    },
    backdrop: {
      zIndex: theme.zIndex.modal + 1,
      color: "#fff",
    },
  }),
)

export default function DefaultPage() {
  const classes = useStyles()
  const isLoading = useSelector(isLoadingSelector)

  return (
    <Backdrop className={classes.backdrop} open={isLoading}>
      <div className={classes.root}>
        <span>Loading...</span>
        <LinearProgress />
      </div>
    </Backdrop>
  )
}

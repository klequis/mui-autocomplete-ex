import React from 'react'
import Downshift from 'downshift'
import { withStyles } from '@material-ui/core/styles'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'
import { renderInput, renderSuggestion, getSuggestions } from './helpers'
import { styles } from './styles'

let popperNode

const DownshiftPopper = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Downshift id="downshift-popper">
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
        }) => (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                placeholder: 'With Popper',
              }),
              ref: node => {
                popperNode = node
              },
            })}
            <div {...getMenuProps()}>
              <Popper disablePortal open={isOpen} anchorEl={popperNode}>
                <Paper square style={{ width: popperNode ? popperNode.clientWidth : null }}>
                  {getSuggestions(inputValue).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label }),
                      highlightedIndex,
                      selectedItem,
                    }),
                  )}
                </Paper>
              </Popper>
            </div>
          </div>
        )}
      </Downshift>
    </div>
  )
}

export default withStyles(styles)(DownshiftPopper)
import React from 'react'
import DownshiftPopper from './DownshiftPopper'
import DownshiftSimple from './DownshiftSimple'
import DownshiftMultiple from './DownshiftMultiple'

const App = () => {
  return (
    <div>
      <DownshiftPopper />
      <DownshiftMultiple />
      <DownshiftSimple />
      <p>some text to show</p>
    </div>
  )
}







// function IntegrationDownshift(props) {
//   const { classes } = props

//   return (
//     <div className={classes.root}>

//       <div className={classes.divider} />
//       <DownshiftMultiple classes={classes} />
//       <div className={classes.divider} />

//     </div>
//   )
// }

// IntegrationDownshift.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default App

import React from 'react'
import withStyles from 'react-jss'

const styles = {
  myButton: {
    color: 'green',
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      // jss-plugin-nested applies this to a child span
      fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
}

const MyComponent = ({classes}) => {
  return (
    <div>
      <button className={classes.myButton}>
        <span className={classes.myLabel}>hello</span>
      </button>
      <div>this is my component</div>
    </div>

  )
}

export default withStyles(styles)(MyComponent)
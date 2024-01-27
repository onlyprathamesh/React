import React from 'react'

export default function Alerts(props) {
    const capitalize = (word) => {
        const text = word.toLowerCase();
        return text.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    
    props.mode && <div class={`alert alert-${props.mode.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.mode.type)}:</strong> {props.mode.message}
</div>
  )
}

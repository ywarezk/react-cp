/**
 * in html we can put style attribute
 * <div style="background-color: 'red'"></div>
 * in jsx style is an object keys are css camel cased
 */

 // error
 const div = <div style="background-color: 'red'"></div>

 const div2 = <div style={ {backgroundColor: 'red'} }></div>
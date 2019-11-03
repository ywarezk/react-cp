/**
 * if i have in html a word that has meaning in JS
 * JSX will change that word
 * 
 * 
 */

 // error - no reserved words
 const div = <div class="foo"></div>

 const div = <div className="foo"></div>

 // error
 const form = (
     <form>
         <label for="user-input">username</label>
         <input id="user-input" />
     </form>
 )

 const form = (
    <form>
        <label htmlFor="user-input">username</label>
        <input id="user-input" />
    </form>
)
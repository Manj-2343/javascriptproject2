//innerHtml
/**
 *    <header class="header">
      <nav class="nav container">
        <h1 class="logo">Website</h1>
        <ul class="navItems">
          <li class="navItem"><a href="#home">Home</a></li>
          <li class="navItem"><a href="">ToDo</a></li>
          <li class="navItem"><a href="">SignUp</a></li>
        </ul>
      </nav>
      <div class="headline">
        <h2 id="main-heading">
          Manage your Task <span style="display: none">Hello</span>
        </h2>
        <button class="btn btn-headline">Learn More</button>
      </div>
    </header>
 */
// note:the html write inside the header is called the innerhtml
const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner Html changed</h1>";
// headline.innerHtml = '<button class="btn">Learn More</button>';
console.log(headline.innerHTML);

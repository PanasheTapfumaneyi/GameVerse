// let text = document.getElementById('text')
// let leaf = document.getElementById('leaf');
// let hill1 = document.getElementById('hill1');
// let hill4 = document.getElementById('hill4');
// let hill5 = document.getElementById('hill5');



document.addEventListener("DOMContentLoaded", () => {
    navigateTo(window.location.hash);
});

window.addEventListener("hashchange", () => {
    navigateTo(window.location.hash);
});

function navigateTo(hash) {
    switch (hash) {
        case "#/signup":
            loadSignupPage();
            break;
        case "#/login":
            loadLoginPage();
            break;
        case "#/feed":
            loadFeedPage();
            break;
        case "#/search":
            loadSearchPage();
            break;
        case "#/profile":
            loadProfilePage();
            break;
        case "#/gamelibrary":
            loadGameLibraryPage();
            break;
        case "#/groups":
            loadGroupsPage();
            break;
        case "#/test-web-service":
            loadTestWebServicePage();
            break;
        default:
            loadFeedPage();
            break;
    }
}


// window.addEventListener('scroll', () => {
//     let value = window.scrollY;
//     text.style.marginTop = value * 2.5 + 'px';
//     leaf.style.top = value * -1.5 + 'px';
//     leaf.style.left = value * 1.5 + 'px';
//     hill5.style.left = value * 1.5 + 'px';
//     hill4.style.left = value * -1.5 + 'px';
//     // hill1.style.top = value * -1 + 'px';
// } );



function renderHeader() {
    if(window.location.hash === "#/login"){
        return '';

    } else if(window.location.hash === '#/signup'){
        return '';
    } 
    
    
    { return `<header class="justify-between font-anta bg-greenback ">
    <nav>
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <!--
                  Icon when menu is closed.
      
                  Menu open: "hidden", Menu closed: "block"
                -->
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <!--
                  Icon when menu is open.
      
                  Menu open: "block", Menu closed: "hidden"
                -->
                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <img class="h-12 w-auto" src="assets/logo3.png">
              </div>
              <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
              <!-- Navigation buttons with icons -->
              <a href="#/feed"
                  class="bg-black text-greenback rounded-md px-3 py-2 text-sm font-medium flex items-center justify-center"
                  aria-current="page">
                  <!-- Icon for Feed -->
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                </svg>
                

                  </svg>
                  Feed
              </a>
              <!-- Add similar icons for other navigation buttons -->
              <a href="#/search"
                  class="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                


                  Search
              </a>
              <a href="#/gamelibrary"
                  class="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

                  Game Library
              </a>
              <a href="#/groups"
                  class="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

                  Groups
              </a>
              <a href="#/profile"
                  class="text-black hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                  Profile
              </a>
          </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" class="relative rounded-full bg-black p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
      
              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                  <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://img.freepik.com/premium-vector/vector-gaming-gamer-logo-design-illustration_894423-53.jpg?w=740" alt="">
                  </button>
                </div>
      
                <!--
                  Dropdown menu, show/hide based on menu state.
      
                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                       <!-- Active: "bg-gray-100", Not Active: "" -->
                <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
           
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                  <a href="#/signup" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign In/Out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>
</header>`;
}}

function renderFooter() {
    return `<footer class="text-center p-4 bg-copylight">
                <p>&copy; 2024 GameVerse Inc. All rights reserved.</p>
            </footer>`;
}

function loadPageContent(content) {
    const app = document.getElementById("app");
    app.innerHTML = renderHeader() + content + renderFooter();
}


function loadSignupPage() {
    const signupContent = `<div class="min-h-screen py-40 bg-[url('public/assets/teelback.jpg')] font-anta" >
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12  backdrop-blur rounded-xl mx-auto shadow-lg overflow-hidden">
        <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style="background-image: url('public/assets/image.jpg');">
          <h1 class="text-white text-3xl mb-3">WELCOME TO GAMEVERSE</h1>
          <div>
            <p class="text-white">Already Joined Us?, Log-In <a href="#/login" class="text-teal-500 font-semibold">Here</a></p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 py-16 px-12">
          <h2  class="text-3xl mb-4 text-white">Register</h2>
          <p class="mb-4 text-white">
            Create your account. It’s free and only take a minute
          </p>
          <form action="#">
            <div class="grid grid-cols-2 gap-5">
              <input type="text" placeholder="Username/GamerTag" class="border border-gray-400 py-1 px-2">
              <input type="text" placeholder="Discord Name" class="border border-gray-400 py-1 px-2">
            </div>
            <div class="mt-5">
              <input type="text" placeholder="Email" class="border border-gray-400 py-1 px-2 w-full">
            </div>
            <div class="mt-5">
              <input type="text" placeholder="Age" class="border border-gray-400 py-1 px-2 w-full">
            </div>
            <div class="mt-5">
              <input type="password" placeholder="Password" class="border border-gray-400 py-1 px-2 w-full">
            </div>
            <div class="mt-5">
              <input type="password" placeholder="Confirm Password" class="border border-gray-400 py-1 px-2 w-full">
            </div>
            <div class="mt-5">
              <input type="checkbox" class="border border-gray-400">
              <span>
                I accept the <a href="#" class="text-teal-500 font-semibold">Terms of Use</a> &  <a href="#" class="text-teal-500 font-semibold">Privacy Policy</a> 
              </span>
            </div>
            <div class="mt-5">
              <button class="w-full bg-teal-500 py-3 text-center text-black">Register Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>`;
    loadPageContent(signupContent);
}

function loadLoginPage() {
    const loginContent = `
    <div class="min-h-screen py-40 bg-[url('public/assets/teelback.jpg')] " >
    <div class="container mx-auto">
    <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12  backdrop-blur rounded-xl mx-auto shadow-lg overflow-hidden">
      <div class="w-full lg:w-1/2 py-16 px-12">
        <h2  class="text-3xl mb-4 text-white">Login</h2>
        <p class="mb-4 text-white">
          Login and Connect
        </p>
        <form action="#">
          <div class="mt-5">
            <input type="text" placeholder="Username/Email" class="border border-gray-400 py-1 px-2 w-full">
          </div>
          <div class="mt-5">
            <input type="password" placeholder="Password" class="border border-gray-400 py-1 px-2 w-full">
          </div>
          <div class="mt-5">
              <input type="checkbox" class="border border-gray-400">
              <span>
               Stay Signed In? 
              </span>
            </div>
          <div class="mt-5">
            <button class="w-full bg-teal-500 py-3 text-center text-black">LET'S PLAY</button>
          </div>
          
        </form>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style="background-image: url('public/assets/image.jpg');">
        <h1 class="text-white text-3xl mb-3">WELCOME TO GAMEVERSE</h1>
        <div>
          <p class="text-white">New Here? <a href="#/signup" class="text-teal-500 font-semibold">Sign Up</a></p>
        </div>
      </div>
    </div>
  </div>
  </div>`;
    loadPageContent(loginContent);
}

function loadFeedPage() {
    const feedContent = `    <section class="relative flex  justify-center items-center h-screen">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/hill1.png" id="hill1">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/hill2.png" id="hill2">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/hill3.png" id="hill3">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/hill4.png" id="hill4">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/hill5.png" id="hill5">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/tree.png" id="tree">
    <h2 id="text" class="absolute text-white text-9xl drop-shadow font-anta">GameVerse</h2>
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/leaf.png" id="leaf">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/plant.png" id="plant">
</section>

<div class="w-2.4 mx-auto my-20"></div>
<section class="relative  bg-darkgrey py-4 font-fredoka">
  

<form>
  <label for="chat" class="sr-only">Your message</label>
  <div class="border-2 border-bordergrey w-2/4 mx-auto flex items-center px-3 py-2 shadow-md rounded-lg bg-green-500 dark:bg-postbackground">
    <img class="h-8 w-8 rounded-full" src="https://img.freepik.com/premium-vector/vector-gaming-gamer-logo-design-illustration_894423-53.jpg?w=740" alt="">
      <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
              <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
          </svg>
          <span class="sr-only">Upload image</span>
      </button>
      <button type="button" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
          </svg>
          <span class="sr-only">Add emoji</span>
      </button>
      <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-postbackground dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What's On Your Mind, Gamer..."></textarea>
          <button type="submit" class="inline-flex justify-center p-2 text-darkgreen rounded-full cursor-pointer hover:bg-black dark:text-teal-500 dark:hover:bg-gray-600">
          <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
          </svg>
          <span class="sr-only">Send message</span>
      </button>
  </div>
  </form>
<div class="w-2.4 mx-auto my-20"></div>
  <div class="border-2 border-bordergrey w-2/4 mx-auto flex items-center px-3 py-2 shadow-md rounded-lg bg-green-500 dark:bg-postbackground">
    <!-- Dummy Post -->
    <div class="flex flex-col w-full  p-4 mb-4">
      <!-- Author Info -->
      <div class="flex items-center mb-2">
        <img src="https://img.freepik.com/premium-vector/vector-gaming-gamer-logo-design-illustration_894423-53.jpg?w=740" alt="Profile Picture" class="w-10 h-10 rounded-full mr-2">
        <span class="text-textgrey font-semibold">Mike Williams</span>
      </div>
      <!-- Post Description -->
      <p class="text-textwhite mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      <!-- Post Image -->
      <img src="assets/post1.jpg" alt="Post Image" class="w-full rounded-lg mb-4">
      <!-- Post Actions -->
      <div class="flex items-center">
        <button class="flex items-center text-white mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          
          Like
        </button>
        <button class="flex items-center text-white mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
          
          Comment
        </button>
        <button class="flex items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
          
          Share
        </button>
      </div>
    </div>
  </div>

</section>`;
    loadPageContent(feedContent);

    let text = document.getElementById('text')
    let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');
    
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
    
        text.style.marginTop = value * 2.5 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
    } );

    
}

function loadProfilePage() {
    const profileContent = `
    <section class="relative block h-64 font-fredoka">
    <div class="absolute top-0 w-full h-full bg-center bg-cover">
      <img src="https://www.bhmpics.com/downloads/wallpaper-thiet-ke/1.3b8ad2c7b1be2caf24321c852103598a-scaled.jpg" alt="">
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
  </section>
  <section class="relative py-16 bg-black font-fredoka">
    <div class="container mx-auto px-4 py-24">
      <div class="relative flex flex-col min-w-0 break-words bg-darkgrey w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
             
              <div class="relative">
                <img alt="..." src="https://img.freepik.com/premium-vector/vector-gaming-gamer-logo-design-illustration_894423-53.jpg?w=740" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-40">
              </div>
              
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div class="py-6 px-3 mt-32 sm:mt-0">
                <button class="bg-button active:bg-accent uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  FOLLOW
                </button>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-textgrey">5</span><span class="text-sm text-white">Followers</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-textgrey">1</span><span class="text-sm text-white">Posts</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-textgrey">1</span><span class="text-sm text-white">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-12">
            <h3 class="text-4xl font-semibold leading-normal mb-2 text-white">
              Mike Williams
              <i class="fas fa-pencil-alt text-button text-lg"></i>
            </h3>
            
      
            <div class="text-sm leading-normal mt-0 mb-2 text-textgrey font-bold">
              @mikeWill
            </div>
            <div class="mb-1 text-green-500">
              <i class="fas fa-solid fa-bolt-lightning"></i> [ACTIVE NOW]
            </div>
            <div class="mb-1 text-greenback">
              <i class="fas fa-solid fa-bolt-lightning"></i> PLAYING: APEX LEGENDS
            </div>
            <div class="mb-2 text-textdarkgrey mt-0">
              <i class="fas fa-solid fa-gamepad"></i> Plays: Apex Legends, Rocket League, Forza Horizon 5
            </div>
            
          </div>
          
          <div class="border-2 border-bordergrey w-2/4 mx-auto flex items-center px-3 py-2 mb-2 shadow-md rounded-lg bg-green-500 dark:bg-postbackground">
            <!-- Dummy Post -->
            <div class="flex flex-col w-full  p-4 mb-4">
              <!-- Author Info -->
              <div class="flex items-center mb-2">
                <img src="https://img.freepik.com/premium-vector/vector-gaming-gamer-logo-design-illustration_894423-53.jpg?w=740" alt="Profile Picture" class="w-10 h-10 rounded-full mr-2">
                <span class="text-white font-semibold">Mike Williams</span>
              </div>
              <!-- Post Description -->
              <p class="text-textwhite mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <!-- Post Image -->
              <img src="assets/post1.jpg" alt="Post Image" class="w-full rounded-lg mb-4">
              <!-- Post Actions -->
              <div class="flex items-center">
                <button class="flex items-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  
                  Like
                </button>
                <button class="flex items-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                  
                  Comment
                </button>
                <button class="flex items-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                  
                  Share
                </button>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
    
  </section>
    `;
    loadPageContent(profileContent);
}
function loadGroupsPage() {
    const groupsContent = `<div class="bg-darkgrey py-16 font-fredoka">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-white mb-8">Looking To Join Friends?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-postbackground border-2 border-bordergrey rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-2">
                <img src="https://img.freepik.com/premium-vector/vector-gaming-gamer-logo-design-illustration_894423-53.jpg?w=740" alt="Profile Picture" class="w-10 h-10 rounded-full mr-2">
                <span class="text-white font-semibold">Mike Williams</span>
              </div>
              <p class="text-textwhite  font-bold">PLAYING:</p>
              <h3 class="text-xl font-bold text-white  mb-4">Apex Legends</h3>
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full rounded-lg" src="https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1707925485" alt="Product">
                    <div class="absolute inset-0 flex items-center justify-center">
                    </div>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <button class="bg-button text-black py-2 px-4 rounded-full font-bold hover:bg-gray-800">Request To Join</button>
                </div>
            </div>
            <div class="bg-postbackground border-2 border-bordergrey rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-2">
                <img src="assets/profile.jpg" alt="Profile Picture" class="w-10 h-10 rounded-full mr-2">
                <span class="text-white font-semibold">Mark Daniels</span>
              </div>
              <p class="text-textwhite  font-bold">PLAYING:</p>
              <h3 class="text-xl font-bold text-white  mb-4">ROCKET LEAGUE</h3>
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full rounded-lg" src="https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg?t=1701892365S" alt="Product">
                    <div class="absolute inset-0 flex items-center justify-center">
                    </div>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <button class="bg-button text-black py-2 px-4 rounded-full font-bold hover:bg-gray-800">Request To Join</button>
                </div>
            </div>
            <div class="bg-postbackground border-2 border-bordergrey rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-2">
                <img src="https://www.svg.com/img/gallery/the-real-reason-most-people-dont-finish-video-games/intro-1579290700.webp" alt="Profile Picture" class="w-10 h-10 rounded-full mr-2">
                <span class="text-white font-semibold">Kate Richards</span>
              </div>
              <p class="text-textwhite  font-bold">PLAYING:</p>
              <h3 class="text-xl font-bold text-white  mb-4">Forza Horizon 5</h3>
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full rounded-lg" src="https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1706912726" alt="Product">
                    <div class="absolute inset-0 flex items-center justify-center">
                    </div>
                </div>
                <div class="flex items-center justify-between mt-4">
                    <button class="bg-button text-black py-2 px-4 rounded-full font-bold hover:bg-gray-800">Request To Join</button>
                </div>
              </div>
        </div>
  
    </div>
  </div>`;
    loadPageContent(groupsContent);
}
function loadGameLibraryPage() {
    const gamelibraryContent = `<div class="bg-darkgrey py-16 font-fredoka">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-white mb-8">Select Your Game Library</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-postbackground border-2 border-bordergrey rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full rounded-lg" src="https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1707925485" alt="Product">
                    <div class="absolute inset-0 flex items-center justify-center">
                    </div>
                </div>
                <h3 class="text-xl font-bold text-white mt-4">Apex Legends</h3>
                <p class="text-textdarkgrey text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                <div class="flex items-center justify-between mt-4">
                    <button class="bg-button text-black py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Library</button>
                    <div class="flex">
                      <span class="text-gray-500">Rate: </span>
                      <div class="flex ml-2">
                          <button id="star" class="star">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            
                          </button>
                          <button id="star" class="star">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            
                          </button>
                          <button id="star" class="star">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            
                          </button>
                          <button id="star" class="star">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            
                          </button>
                          <button id="star" class="star">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            
                          </button>
                      </div>
                  </div>
                </div>
            </div>
            <div class="bg-postbackground border-2 border-bordergrey rounded-lg shadow-lg p-8">
              <div class="relative overflow-hidden">
                  <img class="object-cover w-full h-full rounded-lg" src="https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg?t=1701892365" alt="Product">
                  <div class="absolute inset-0 flex items-center justify-center">
                  </div>
              </div>
              <h3 class="text-xl font-bold text-white mt-4">Rocket League</h3>
              <p class="text-textdarkgrey text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                  ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
              <div class="flex items-center justify-between mt-4">
                  <button class="bg-button text-black py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Library</button>
                  <div class="flex">
                    <span class="text-gray-500">Rate: </span>
                    <div class="flex ml-2">
                        <button id="star" class="star">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>
                          
                        </button>
                        <button id="star" class="star">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>
                          
                        </button>
                        <button id="star" class="star">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>
                          
                        </button>
                        <button id="star" class="star">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>
                          
                        </button>
                        <button id="star" class="star">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>
                          
                        </button>
                    </div>
                </div>
              </div>
          </div>
          <div class="bg-postbackground border-2 border-bordergrey rounded-lg shadow-lg p-8">
            <div class="relative overflow-hidden">
                <img class="object-cover w-full h-full rounded-lg" src="https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1706912726" alt="Product">
                <div class="absolute inset-0 flex items-center justify-center">
                </div>
            </div>
            <h3 class="text-xl font-bold text-white mt-4">Apex Legends</h3>
            <p class="text-textdarkgrey text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
            <div class="flex items-center justify-between mt-4">
                <button class="bg-button text-black py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Library</button>
                <div class="flex">
                  <span class="text-gray-500">Rate: </span>
                  <div class="flex ml-2">
                      <button id="star" class="star">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        
                      </button>
                      <button id="star" class="star">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        
                      </button>
                      <button id="star" class="star">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        
                      </button>
                      <button id="star" class="star">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        
                      </button>
                      <button id="star" class="star">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        
                      </button>
                  </div>
              </div>
            </div>
        </div>
        </div>
  
    </div>
  </div>`;


    loadPageContent(gamelibraryContent);

    const stars = document.querySelectorAll('.star')

stars.forEach(star => {
  star.addEventListener('click', function() {
    star.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4FAA9B" class="w-6 h-6">
   <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>
    `;
  })
})
}
function loadSearchPage() {
    const searchContent = `
   <section class="h-screen bg-darkgrey">
   <div class="py-4">
   <form class="max-w-md mx-auto">   
   <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
   <div class="relative">
       <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
           </svg>
       </div>
       <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-bordergray rounded-lg bg-postbackground focus:ring-blue-500 focus:border-blue-500 dark:bg-postbackground dark:border-bordergray dark:placeholder-bordergray dark:text-white dark:focus:ring-darkgreen dark:focus:border-bordergray" placeholder="Search..." required />
       <button type="submit" class="text-black   absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-button dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
   </div>
</form> 
   </div> 
   </section>
    `;
    loadPageContent(searchContent);
}

function loadTestWebServicePage() {
    const testWebServiceContent = `<div class="text-center my-4">
                                       <h2>Test Web-Service Page</h2>
                                       <button id="getBtn" class="bg-blue-500 text-white rounded px-4 py-1 m-2">Send GET Request</button>
                                       <button id="postBtn" class="bg-green-500 text-white rounded px-4 py-1 m-2">Send POST Request</button>
                                       <div id="response"></div>
                                   </div>`;
    loadPageContent(testWebServiceContent);

    document.getElementById('getBtn').addEventListener('click', sendGetRequest);
    document.getElementById('postBtn').addEventListener('click', sendPostRequest);
}

function sendGetRequest() {
    fetch('/test-web-service')
        .then(response => response.json())
        .then(data => {
            const responseContainer = document.getElementById('response');
            responseContainer.innerHTML = ''; // Clear previous content

            if (Array.isArray(data) && data.length > 0) {
                // Iterate over each data item and create structured HTML
                data.forEach((item, index) => {
                    const itemContainer = document.createElement('div');
                    itemContainer.classList.add('data-item', 'border', 'p-3', 'm-2', 'rounded');

                    // Create a formatted string of JSON data
                    const formattedData = JSON.stringify(item, null, 2);
                    itemContainer.innerHTML = `<h3 class="font-bold">Data Received ${index + 1}</h3><pre>${formattedData}</pre>`;
                    responseContainer.appendChild(itemContainer);
                });
            } else {
                responseContainer.innerHTML = '<p>No data available.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('response').innerText = 'Error: ' + error;
        });
}


function sendPostRequest() {
    fetch('/test-web-service', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: "Sample POST Data" }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = "Response: " + JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
}


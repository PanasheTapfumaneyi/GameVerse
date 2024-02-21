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
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
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
    return `<footer class="text-center p-4 bg-gray-200 mt-4">
                <p>&copy; 2024 Demo Week 15. All rights reserved.</p>
            </footer>`;
}

function loadPageContent(content) {
    const app = document.getElementById("app");
    app.innerHTML = renderHeader() + content + renderFooter();
}

function loadHomePage(){
    const homeContent = `
    <section class="relative flex  justify-center items-center h-screen">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/hill1.png" id="hill1">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/hill2.png" id="hill2">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/hill3.png" id="hill3">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/hill4.png" id="hill4">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/hill5.png" id="hill5">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/tree.png" id="tree">
    <h2 id="text" class="absolute text-white text-5xl font-anta">GameVerse</h2>
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/leaf.png" id="leaf">
    <img class="absolute top-0 left-0 w-full pointer-events-none" src="assets/plant.png" id="plant">
</section>
<section class="relative  bg-darkgreen">
  <h2 class="text-2xl text-black">Website</h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</section>
    `
    
    loadPageContent(homeContent);

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
    // hill1.style.top = value * -1 + 'px';
} );
}

function loadSignupPage() {
    const signupContent = `<div class="min-h-screen py-40 bg-[url('/assets/teelback.jpg')] font-anta" >
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12  backdrop-blur rounded-xl mx-auto shadow-lg overflow-hidden">
        <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style="background-image: url('/assets/image.jpg');">
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
              <input type="text" placeholder="Firstname" class="border border-gray-400 py-1 px-2">
              <input type="text" placeholder="Surname" class="border border-gray-400 py-1 px-2">
            </div>
            <div class="mt-5">
              <input type="text" placeholder="Email" class="border border-gray-400 py-1 px-2 w-full">
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
    <div class="min-h-screen py-40 bg-[url('/assets/teelback.jpg')] " >
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
      <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style="background-image: url('/assets/image.jpg');">
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
<section class="relative  bg-darkgrey py-4">
  

<form>
  <label for="chat" class="sr-only">Your message</label>
  <div class="border-2 border-bordergrey w-2/4 mx-auto flex items-center px-3 py-2 shadow-md rounded-lg bg-green-500 dark:bg-postbackground">
    <img class="h-8 w-8 rounded-full" src="assets/profile.jpg" alt="">
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
        <img src="assets/profile.jpg" alt="Profile Picture" class="w-10 h-10 rounded-full mr-2">
        <span class="text-textgrey font-semibold">John Doe</span>
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
        // hill1.style.top = value * -1 + 'px';
    } );

    
}

function loadProfilePage() {
    const profileContent = `<div class="text-center my-4">
                                <h2>Profile Page</h2>
                                <div class="border-2 border-emerald-300 rounded p-4 m-2">
                                <p><strong>Name:</strong> John Doe</p>
                                <p><strong>Username:</strong> johndoe123</p>
                                <p><strong>Bio:</strong> This is a sample bio.</p>
                            </div>
                            </div>`;
    loadPageContent(profileContent);
}
function loadGroupsPage() {
    const groupsContent = `<div class="text-center my-4">
                                <h2>groups Page</h2>
                                <div class="border-2 border-emerald-300 rounded p-4 m-2">
                                <p><strong>Name:</strong> John Doe</p>
                                <p><strong>Username:</strong> johndoe123</p>
                                <p><strong>Bio:</strong> This is a sample bio.</p>
                            </div>
                            </div>`;
    loadPageContent(groupsContent);
}
function loadGameLibraryPage() {
    const gamelibraryContent = `<div class="text-center my-4">
                                <h2>gamelibrary Page</h2>
                                <div class="border-2 border-emerald-300 rounded p-4 m-2">
                                <p><strong>Name:</strong> John Doe</p>
                                <p><strong>Username:</strong> johndoe123</p>
                                <p><strong>Bio:</strong> This is a sample bio.</p>
                            </div>
                            </div>`;
    loadPageContent(gamelibraryContent);
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
       <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-background dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
   </div>
</form> 
   </div> 
   </section>
    >`;
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


const r=[{id:"half-marathon",name:"Half Marathon Program",price:99,duration:"12 Weeks",image:"https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400",description:"Complete 12-week training program designed to get you race-ready for your half marathon PR.",features:["Personalized training schedule","Nutrition guidance","Race day strategy"]},{id:"speed-training",name:"Unleash Speed Program",price:129,duration:"8 Weeks",image:"https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=400",description:"Specialized speed and interval training to help you break through plateaus and run faster.",features:["Advanced interval training","VO2 max improvement","Speed endurance workouts"]},{id:"strength-training",name:"Strength Training",price:79,duration:"Ongoing",image:"https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",description:"Runner-specific strength training to improve performance and prevent injuries.",features:["Injury prevention focus","Core stability training","Progressive overload system"]},{id:"marathon",name:"Marathon Program",price:149,duration:"16 Weeks",image:"https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400",description:"Comprehensive 16-week marathon training program for first-timers and PR seekers.",features:["Progressive mileage buildup","Long run strategies","Tapering protocols"]},{id:"5k-program",name:"5K Speed Program",price:69,duration:"6 Weeks",image:"https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=400",description:"Intensive 6-week program focused on 5K speed and performance optimization.",features:["Track workout sessions","Tempo run training","Race pacing strategies"]},{id:"nutrition",name:"Nutrition Coaching",price:149,duration:"Monthly",image:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",description:"Personalized nutrition coaching to optimize your running performance and recovery.",features:["Personalized meal plans","Race day nutrition","Supplement guidance"]}];function i(){const t=document.getElementById("programs-grid");t.innerHTML=r.map(e=>`
      <div class="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        <img src="${e.image}" alt="${e.name}" class="w-full h-48 object-cover" />
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <span class="bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">${e.duration}</span>
            <span class="text-2xl font-bold text-primary-600">$${e.price}</span>
          </div>
          <h3 class="font-display font-semibold text-xl text-gray-900 mb-3">${e.name}</h3>
          <p class="text-gray-600 mb-4">${e.description}</p>
          <ul class="space-y-2 mb-6">
            ${e.features.map(o=>`
              <li class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                ${o}
              </li>
            `).join("")}
          </ul>
          <button onclick="addToCart('${e.id}')" class="w-full bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    `).join("")}function n(){document.getElementById("checkout-section").style.display="block",document.getElementById("checkout-section").scrollIntoView({behavior:"smooth"})}document.getElementById("checkout-btn")?.addEventListener("click",n);document.getElementById("checkout-form")?.addEventListener("submit",function(t){t.preventDefault(),alert("Thank you for your order! You will receive a confirmation email shortly.")});i();

const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// 
tabs.forEach( (tab) => {
  tab.addEventListener('click',onTabClick)
});
// 
tabs.forEach( (tab) => {
  tab.addEventListener('click',handleClick)
});

// 
function handleClick(event) {
  event.preventDefault(); 
}

function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.classList.remove(
      'text-green',
      'border-b-4',
    )
  })

  panels.forEach((panel) => panel.classList.add('hidden') )

  e.target.classList.add('text-green','border-b-4')

  const classString = e.target.getAttribute('data-target')

  const a = document
  .getElementById('panels')
  .getElementsByClassName(classString)[0]
  .classList.remove('hidden')

}

// // ##################################################################################





const userN = document.getElementById('userN')
const settings = document.getElementById('settings')

// 
const down = document.getElementById('down')
const down_two = document.getElementById('down_two')
const filters = document.getElementById("filters")
const hf = document.getElementById("hf")

// 
const filter_level = document.getElementById("filter_level")
const menu_level = document.getElementById("menu_level")
const down_level = document.getElementById("down_level")
// 
const filter_remote = document.getElementById("filter_remote")
const menu_remote = document.getElementById("menu_remote")
const down_remote = document.getElementById("down_remote")
// 
const filter_shedule = document.getElementById("filter_shedule")
const menu_shedule = document.getElementById("menu_shedule")
const down_shedule = document.getElementById("down_shedule")
// 




// // 

// // 
show_hidde(filter_level,menu_level,down_level)
// 
show_hidde(filter_remote,menu_remote,down_remote)
// 
show_hidde(filter_shedule,menu_shedule,down_shedule)
// 
show_hidde(userN,settings,down)
// 
show_hidde(hf,filters,down_two)


// // Func
function show_hidde(btn,menu,down) {
  if (btn) {
    btn.addEventListener('click', function() {
      menu.classList.toggle('hidden')
      down.classList.toggle('rotate-180')
    })
  }
}


//###################################

const search_form = document.getElementById('search_form')
const search_job_btn = document.getElementById('search_job_btn')

if (search_job_btn) {
  search_job_btn.addEventListener('click',hidde_search)
}
function hidde_search(){
    search_form.classList.toggle('hidden')
}


// #################################################
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}



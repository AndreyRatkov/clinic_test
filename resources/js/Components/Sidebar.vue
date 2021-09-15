<template>
          <!-- style="background-color: #e3f2fd;" sidebar-dark-primary -->
          <aside class="main-sidebar sidebar-light-primary elevation-4" style="background-color: #009ee0;" >
            <div class="sidebar">
              <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                  <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                  <div class="input-group-append">
                    <button class="btn btn-sidebar">
                      <i class="fas fa-search fa-fw"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Sidebar Menu -->
              <nav class="mt-2" >
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  <!-- Add icons to the links using the .nav-icon class
                       with font-awesome or any other icon font library -->
                  
                  <!--v-if="role === 'super_admin' || role === 'admin'"-->

                  <!--
                    //patients_all, patients_on_doctor, doctors, managers

                    patient,
                    doctor,
                    manager

                    flag/:role
                  -->

                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      v-if="role === 'manager' || role === 'doctor'"
                      :to="{ name: 'about-i', params: { flag: false, role: role } }"
                      >
                      
                      <i class="nav-icon fas fa-th"></i>
                      <p>
                        О себе
                      </p>
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      v-if="role === 'manager'"
                      :to="{ name: 'users-list', params: { template: 'patients_all' } }"
                      >
                      
                      <i class="nav-icon fas fa-th"></i>
                      <p>
                        Пациенты
                      </p>
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      v-if="role === 'doctor'"
                      
                      :to="{ name: 'users-list', params: { template: 'patients_on_doctor' } }"
                      
                      >
                      <i class="nav-icon fas fa-th"></i>
                      <p>
                        Пациенты 
                      </p>
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      v-if="role === 'manager'"
                      
                      :to="{ name: 'doctors-list', params: { template: 'doctors' } }"
                      
                      >
                      <i class="nav-icon fas fa-th"></i>
                      <p>
                        Врачи 
                      </p>
                    </router-link>
                  </li>

                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      v-if="role === 'manager'"
                      
                      :to="{ name: 'users-list', params: { template: 'managers' } }"
                      >
                      <i class="nav-icon fas fa-th"></i>
                      <p>
                        Менеджеры 
                      </p>
                    </router-link>
                  </li>

                  

                </ul>
              </nav>
            </div>
          </aside>


        
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'sidebar',
    computed: {
        ...mapState({
            isSmallSidebar: state => state.isSmallSidebar,
            role: state => state.role,//super_admin,admin,manager
        }),
    },
    methods: {
      ups(name_u) {
        //{ name: 'users-list', params: { template: 'patients_all' } }
        //{ name: 'users-list', params: { template: 'patients_on_doctor' } }
        //{ name: 'doctors-list', params: { template: 'doctors' } }
        //{ name: 'users-list', params: { template: 'managers' } }
        /*
        if(name_u === 'patients_all') {
          this.$router.push({ name: 'users-list', params: { template: 'patients_all' } })
        }
        if(name_u === 'patients_on_doctor') {
          this.$router.push({ name: 'users-list', params: { template: 'patients_on_doctor' } })
        }
        if(name_u === 'doctors') {
          this.$router.push({ name: 'doctors-list', params: { template: 'doctors' } })
        }
        if(name_u === 'managers') {
          this.$router.push({ name: 'users-list', params: { template: 'managers' } })
        }
        */
        //this.$router.go()
        //this.$router.go(this.$router.currentRoute)
        //console.log("111")
      },
      changeSidebar() {
        if(this.isSmallSidebar) {
          this.$store.commit('NormalSidebar')
        } else {
          this.$store.commit('SmallSidebar')
        }
        
        //document.getElementById("mySidenav").style.width = "50px";
        //document.getElementById("main").style.marginLeft = "50px";
      },
      normalSidebar() {

      }
    },
    mounted() {
      console.log("role:" + this.role)
      
    }
}
</script>

<style scoped>
.sidenav {
  /*
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  */
}

.sidenav_normal {
  width: 300px;
}
.sidenav_small {
  width: 80px;
}

.sidenav a {
  /*
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  /*color: #818181;
  display: block;
  transition: 0.3s;
  */
}

.sidenav a:hover {
  /*color: #f1f1f1;*/
}

.sidenav .closebtn {
  /*
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  */
}

#main {
  /*
  transition: margin-left .5s;
  padding: 16px;
  */
}

@media screen and (max-height: 450px) {
  /*
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
  */
}
</style>
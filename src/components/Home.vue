<template>
	
  <el-container>
  	
  	<el-header>
  		
  		<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple">  	
					<router-link to="/">VUEADMIN</router-link>
			  </div></el-col>
			  <el-col :span="16"><div class="grid-content bg-purple-light">
			  	<i class="el-icon-tickets" @click="showAndHide"></i>
			  </div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple">1</div></el-col>
			</el-row>
  		
  	</el-header>
  	
  	<el-main>
  		
  		<el-row>
			  <el-col :span="5"><div class="grid-content bg-purple">
			  	
			  	<el-aside>
			  		<el-row class="tac">
						  <el-col :span="24">
						  	
						    <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
								  <el-radio-button :label="false">展开</el-radio-button>
								  <el-radio-button :label="true">收起</el-radio-button>
								</el-radio-group>-->
								
								<el-menu unique-opened router default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
								  
								  <template  v-for="item,index in $router.options.routes">
								  	
								  	<el-submenu :index="index+''" v-if="!item.oneLeaf">
									    <template slot="title">
									      <i :class="item.icon"></i>
									      <span slot="title">{{item.name}}</span>
									    </template>
									    
									    <el-menu-item :key="index" v-for="list,index in item.children" :index="'/'+list.path">{{list.name}}</el-menu-item>
	
									  </el-submenu>
									  
									  <el-menu-item :index="'/'+item.children[0].path" v-if="item.oneLeaf">
										    <i :class="item.icon"></i>
								    		<span slot="title">{{item.children[0].name}}</span>
										</el-menu-item>
								  	
								  </template>									  

								  <!--<el-submenu index="1">
								    <template slot="title">
								      <i class="el-icon-location"></i>
								      <span slot="title">导航一</span>
								    </template>
								    
							      <el-menu-item index="/table">Table</el-menu-item>
							      <el-menu-item index="/form">Form</el-menu-item>
							      <el-menu-item index="/list">List</el-menu-item>

								  </el-submenu>

								  <el-submenu index="2">
								    <template slot="title">
								      <i class="el-icon-menu"></i>
								      <span slot="title">导航二</span>
								    </template>
								    
							      <el-menu-item index="/page4">页面四</el-menu-item>
							      <el-menu-item index="/page5">页面五</el-menu-item>


								  </el-submenu>

								  <el-menu-item index="/page6" >
								    <i class="el-icon-document"></i>
								    <span slot="title">导航三</span>
								  </el-menu-item>
								  
								  <el-submenu index="4">
								    <template slot="title">
								      <i class="el-icon-setting"></i>
								      <span slot="title">导航四</span>
								    </template>
								    
							      <el-menu-item index="/echarts">echarts</el-menu-item>

								  </el-submenu>-->
								  							  
								</el-menu>
						    					    
						  </el-col>
						</el-row>
			  	</el-aside>
			  	
			  </div></el-col>
			  <el-col :span="19"><div class="grid-content bg-purple-light">
			  	
			  	<transition name="el-fade-in" mode="out-in">
			  		<router-view></router-view>
			  	</transition>
			  	
			  </div></el-col>
			</el-row>
  		
  		
  		
  	</el-main>
  	
  </el-container>	



</template>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        isCollapse: false
      }
    },
    methods:{
    	handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      showAndHide(){
      	this.isCollapse = !this.isCollapse
      }
    },
    created(){
    	console.log(this.$router.options.routes)
    }
  };
</script>

<style>
	
	.el-main{
		padding: 0;
	}
	.el-aside{
		width: auto !important;
	}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .el-icon-tickets{
  	cursor: pointer;
  }
</style>


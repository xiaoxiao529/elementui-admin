<template>
  
  <div id="table" v-loading="loading">
  	<h3>Table</h3>
  	<el-row>
  		
	  <el-col :span="4">
	  	<div class="grid-content bg-purple">
		  	<el-input  placeholder="请输入内容" v-model="username"></el-input>
		</div>
	  </el-col>
	  <el-col :span="1">
	  	<div class="grid-content bg-purple">&nbsp;</div>
	  </el-col>
	  <el-col :span="12">
	  	<div class="grid-content bg-purple-light">
	  	  <el-button type="primary"  @click="searchUser()">查询</el-button>
	  	  <el-button type="primary" @click="addUser()">新增</el-button>
	  	</div>
	  </el-col>
	  
	</el-row>
  	<el-table
	    ref="multipleTable"
	    :data="tableData3.slice((currentPage-1)*pageSize,currentPage*pageSize)"
	    tooltip-effect="dark"
	    style="width: 100%"
	    @selection-change="handleSelectionChange"
	    >
	
	    <el-table-column
	      type="selection"
	      width="55">
	    </el-table-column>
	    
	    <el-table-column
	      type="index"
	      width="55">
	    </el-table-column>
	    
	    <el-table-column
	      prop="name"
	      label="姓名"
	      sortable
	      width="120">
	    </el-table-column>
	    
	    <el-table-column
	      prop="sex"
	      label="性别"
	      sortable
	      :formatter="formatSex"
	      width="120">
	    </el-table-column>
	    
	    <el-table-column
	      prop="age"
	      label="年龄"
	      sortable
	      width="120">
	    </el-table-column>
	    
	    <el-table-column
	      label="生日"
	      sortable
	      width="120"
	      prop="birth"
	      >
	    </el-table-column>
	    
	    <el-table-column
	      prop="address"
	      sortable
	      label="地址"
	      show-overflow-tooltip>
	    </el-table-column>
	    
	    <el-table-column label="操作">
	      <template slot-scope="scope">
	        <el-button
	          size="mini"
	          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
	        <el-button
	          size="mini"
	          type="danger"
	          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
	      </template>
	    </el-table-column>
	    
	  </el-table>
	  <div style="margin-top: 20px">

	    <el-button @click="toggleSelection()">取消选择</el-button>
	  </div>
	  <el-pagination
		  background
		  layout="prev, pager, next"
		  :total="totalPage"
		  :pageSize="pageSize"
		  :currentPage="currentPage"
		  @current-change="current_change"
		  >
		</el-pagination>
		
		<!--新增界面框-->
		<el-dialog title="新增" :visible.sync="dialogFormVisible">
			
		  <el-form :model="form" :rules="addRules" ref="addRuleForm" label-width="80px">
		  	
		    <el-form-item label="姓名" prop="name">
		      <el-input v-model="form.name" autocomplete="off"></el-input>
		    </el-form-item>
		    
		    <el-form-item label="性别">
			    <el-radio-group v-model="form.sex">
			      <el-radio :label="1">男</el-radio>
			      <el-radio :label="0">女</el-radio>
			    </el-radio-group>
			  </el-form-item>
		    
		    <el-form-item label="年龄" prop="age">
			    <el-input v-model.number="form.age"></el-input>
			  </el-form-item>
			  
			  <el-form-item label="生日" required>
			    <el-col :span="24">
			      <el-form-item prop="date1">
			        <el-date-picker  type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
			      </el-form-item>
			    </el-col>
			  </el-form-item>
		    
		    <el-form-item label="地址" prop="address">
			    <el-input type="textarea" v-model="form.address"></el-input>
			  </el-form-item>
			    
		  </el-form>
		  
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="addUserData()">确 定</el-button>
		  </div>
		</el-dialog>
		
		
		<!--编辑界面框-->
		<el-dialog title="编辑" :visible.sync="editFormVisible">
			
		  <el-form :model="editform" :rules="editRules" ref="editRuleForm" label-width="80px">
		  	
		    <el-form-item label="姓名" prop="name">
		      <el-input v-model="editform.name" autocomplete="off"></el-input>
		    </el-form-item>
		    
		    <el-form-item label="性别">
			    <el-radio-group v-model="editform.sex">
			      <el-radio :label="1">男</el-radio>
			      <el-radio :label="0">女</el-radio>
			    </el-radio-group>
			  </el-form-item>
		    
		    <el-form-item label="年龄" prop="age">
			    <el-input v-model.number="editform.age"></el-input>
			  </el-form-item>
			  
			  <el-form-item label="生日" required>
			    <el-col :span="24">
			      <el-form-item prop="date1">
			        <el-date-picker  type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="editform.date1" style="width: 100%;"></el-date-picker>
			      </el-form-item>
			    </el-col>
			  </el-form-item>
		    
		    <el-form-item label="地址" prop="address">
			    <el-input type="textarea" v-model="editform.address"></el-input>
			  </el-form-item>
			    
		  </el-form>
		  
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="editFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="editSubmit()">确 定</el-button>
		  </div>
		</el-dialog>
		
		
		
		
  </div>
  
</template>

<script>
	import axios from 'axios';
  export default {
    data() {
      return {
        tableData3: [],
        multipleSelection: [],
        queryString:{
        	
        },
        totalPage:0,
        pageSize:10,
        currentPage:1,
        loading: true,
        username:'',  //查询的用户名称
        dialogFormVisible: false,//新增框
        editFormVisible:false,//编辑框
        form: {
          name: '',
          sex:-1,
          age: '',
          date1: '',
          address:''
        },
        editform: {
          name: '',
          sex:-1,
          age: '',
          date1: '',
          address:''
        },
        formLabelWidth: '120px',
        addRules:{
        	name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
        editRules:{
        	name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      
      //编辑当前用户数据
      handleEdit(index, row) {
      	
      	this.editFormVisible = true;
        this.editform = Object.assign({},row)
        
        console.log(row)

      },
      
      editSubmit(){
      	this.$confirm('是否编辑本条数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        		this.dialogFormVisible = true;
	        	let username = this.form.name;
		      	let age = this.form.age;
		      	let sex = this.form.sex;
		      	let date1 = this.form.date1;
		      	let address = this.form.address;
						let param = {
		        	id:row.id,
		        	username,
		      		age,
		      		sex,
		      		date1,
		      		address
		        }
	        	axios.get('/user/editUser',{params:param}).then((response)=>{
	        		if(response.data.code === 200){
	        			this.$message({
			            type: 'success',
			            message: '编辑成功!'
			          });
			          this.getUser();
			          this.dialogFormVisible = false;
	        		}
	        	
	        	
		        }).catch((error)=>{
		        	console.log(error)
		        })
        	
        	
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消编辑'
          });          
        });
      },
      
      //删除当前用户数据
      handleDelete(index, row) {
        
        
        this.$confirm('是否删除本条数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
						let param = {
		        	id:row.id
		        }
	        	axios.get('/user/deleteUser',{params:param}).then((response)=>{
	        		if(response.data.code === 200){
	        			this.$message({
			            type: 'success',
			            message: '删除成功!'
			          });
			          this.getUser()
	        		}
	        	
	        	
		        }).catch((error)=>{
		        	console.log(error)
		        })
        	
        	
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        
        
      },
      //性别转换
      formatSex(row, column) {
        return row.sex == 1 ? '男' : '女';
      },
      current_change(currentPage){
      	this.currentPage = currentPage;
      },
      searchUser(){

				if(this.username == '' ){
					this.getUser()
					return ;
				}
      	this.tableData3 =  this.tableData3.filter((value,key,arr)=>{
      		return value.name === this.username
      	})
      	
      },
      
      //封装请求用户信息方法
      getUser(){
      	this.loading = true;
//    	var searchObj = {
//    		username:this.username
//    	}
      	axios.get('/user/list'/*,{params:searchObj}*/).then((response)=>{
	    		this.tableData3 = response.data.users
	    		this.totalPage = response.data.users.length
	    		this.loading = false;
					console.log(this.tableData3)
	    	}).catch((error)=>{
	    		console.log(error)
	    	})
      },
      //新增用户
      addUser(){
      	this.dialogFormVisible = true
      },
      
      //增加数据
      addUserData(){
      	let username = this.form.name;
      	let age = this.form.age;
      	let sex = this.form.sex;
      	let date1 = this.form.date1;
      	let address = this.form.address;
      	let addObj = {
      		id:new Date().getTime(),
      		username,
      		age,
      		sex,
      		date1,
      		address
      	}

      	this.$refs['addRuleForm'].validate((valid) => {
          if (valid) {  //用户填写的数据，校验通过，进行数据提交
          	
          	this.$confirm('是否提交?', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			        	this.dialogFormVisible = false;
			        	
			        	let _addObj = Object.assign({},addObj);
			        	
			        	axios.get('/user/addUser',{params:_addObj}).then((response)=>{
            			console.log(response)
				        	if(response.data.code===200){
					    			this.$message({
					            type: 'success',
					            message: '新增成功!'
					          });
					          
					          this.getUser();
					          this.$refs['addRuleForm'].resetFields();
					    		}
	
					    	}).catch((error)=>{
					    		console.log(error)
					    	})
			        	
			        	
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '已取消新增'
			          });          
			        });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      	
      	
      }
    },
    created(){
    	//请求用户信息
    	this.getUser();
    	
    }
  }
</script>

<style>
	
</style>
<template>
	
	<div class="login-box">
		<h4>系统登录</h4>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
		  <el-form-item  prop="name">
		    <el-input v-model="ruleForm.name"></el-input>
		  </el-form-item>
		  <el-form-item  prop="password">
		    <el-input v-model="ruleForm.password"></el-input>
		  </el-form-item>
		  
		  <el-form-item  prop="type">

		      <el-checkbox v-model="ruleForm.type" label="记住密码" name="type"></el-checkbox>
		      

		  </el-form-item>
	
		  <el-form-item>
		    <el-button type="primary" :loading="isLoading" @click="submitForm('ruleForm')" style="width:100%">登录</el-button>
		  </el-form-item>
		</el-form>
	</div>
	
	
	
</template>

<script>
	import axios from 'axios'
	export default {
	    data() {
	      return {
	      	isLoading:false,
	        ruleForm: {
	          name: '',
	          password: '',
	          type:''
	        },
	        rules: {
	          name: [
	            { required: true, message: '请输入账号', trigger: 'blur' },

	          ],
	          password: [
	            { required: true, message: '请输入密码', trigger: 'blur' },

	          ],
	        }
	      };
	    },
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	          	
	          	this.isLoading = true
	          	
	          	let username = this.ruleForm.name
	          	let password = this.ruleForm.password;
	          	let params = {
	          		username,
	          		password
	          	}
	          	
	          	axios.post('/login',params).then((response)=>{
	          		this.isLoading = false
	          		let {msg,code} = response.data
	          		if(code === 200){  //登录错误才提示，正确就直接跳转
	          			/*this.$message({
				           type: 'success',
				           message: msg
				        });*/
				        this.$router.push('/table')
	          		}else{
	          			this.$message({
				           type: 'error',
				           message: msg
				        });
	          		}
	          	})
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      }
	    }
	  }
</script>

<style>
	.login-box{
		-webkit-border-radius: 5px;
	    border-radius: 5px;
	    -moz-border-radius: 5px;
	    background-clip: padding-box;
	    margin: 180px auto;
	    width: 350px;
	    padding: 35px 35px 15px 35px;
	    background: #fff;
	    border: 1px solid #eaeaea;
	    box-shadow: 0 0 25px #cac6c6;
	}
	.login-box h4{
		margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
	}
</style>
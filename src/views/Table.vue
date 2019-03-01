<template>
  
  <div id="table">
  	<h3>Table</h3>
  	<el-row>
  		
	  <el-col :span="4">
	  	<div class="grid-content bg-purple">
		  	<el-input  placeholder="请输入内容"></el-input>
		</div>
	  </el-col>
	  <el-col :span="1">
	  	<div class="grid-content bg-purple">&nbsp;</div>
	  </el-col>
	  <el-col :span="12">
	  	<div class="grid-content bg-purple-light">
	  	  <el-button type="primary">查询</el-button>
	  	  <el-button type="primary">新增</el-button>
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
        currentPage:1
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
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      //性别转换
      formatSex(row, column) {
        return row.sex == 1 ? '男' : '女';
      },
      current_change(currentPage){
      	this.currentPage = currentPage;
      }
    },
    created(){
    	//请求用户信息
    	axios.get('/user/list').then((response)=>{
    		console.log(response)
    		
    		this.tableData3 = response.data.users
    		this.totalPage = response.data.users.length
    	})
    }
  }
</script>

<style>
	
</style>
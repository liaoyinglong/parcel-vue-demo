<template>
  <el-form :model="model" ref='dynamicValidateForm'>
    <!-- <el-form-item label="密码" prop="pass1" verify>
      <el-input v-model="model.pass1"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="pass2" :verify="verifyPassword" :watch="model.pass1">
      <el-input v-model="model.pass2"></el-input>
    </el-form-item>
    <el-form-item label="中文" prop="text" verify mustChinese>
      <el-input v-model="model.text" placeholder=""></el-input>
    </el-form-item> -->

    <el-row :gutter="30" v-for="(student,index) in model.students">
      <el-col :span="10">
        <el-form-item :label="`同学${index+1}的名字`" :prop="'students.'+index+'.name'" verify>
          <el-input v-model="student.name" placeholder=""></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item :label="`同学${index+1}的年龄`" :prop="'students.'+index+'.age'" verify>
          <el-input v-model="student.age" placeholder=""></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <el-form-item label="操作">
          <el-button type="danger" @click="del(index)">删除</el-button>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" @click="add">增加一个同学</el-button>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button type="primary" @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      model: {
        pass1: '',
        pass2: '',
        text: '',
        students: [{ name: '', age: '' }],
      },
    }
  },
  methods: {
    verifyPassword(rule, val, callback) {
      if (val !== this.model.pass1) {
        return callback(Error('两次输入密码不一致!'))
      }
      callback()
    },
    add() {
      this.model.students.push({ name: '', age: '' })
    },
    del(index) {
      this.model.students.splice(index, 1)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>
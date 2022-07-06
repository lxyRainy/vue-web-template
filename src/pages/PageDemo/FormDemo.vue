<template>
  <el-form
    :model="dynamicValidateForm"
    ref="dynamicValidateForm"
    label-width="120px"
    class="demo-dynamic"
  >
    <el-row
      v-for="(domain, index) in dynamicValidateForm.persons"
      :key="domain.key"
    >
      <el-col :span="8">
        <el-form-item
          :label="'姓名' + index + 1"
          :prop="'persons.' + index + '.name'"
          :rules="rules.name"
        >
          <el-input v-model="domain.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item
          :label="'手机号码' + index + 1"
          :prop="'persons.' + index + '.iphone'"
          :rules="rules.iphone"
        >
          <el-input v-model="domain.iphone"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item
          :label="'身份证号码' + index + 1"
          :prop="'persons.' + index + '.idCard'"
          :rules="rules.idCard"
        >
          <el-input v-model="domain.idCard"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')"
        >提交</el-button
      >
      <el-button @click="addPerson">新增人员</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        persons: [
          {
            name: '',
            iphone: '',
            idCard: '',
          },
          {
            name: '',
            iphone: '',
            idCard: '',
          },
          {
            name: '',
            iphone: '',
            idCard: '',
          },
        ],
        email: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入姓名',
            trigger: 'blur',
          },
        ],
        iphone: [
          {
            required: true,
            message: '请输入手机号码',
            trigger: 'blur',
          },
          {
            pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
            message: '请输入正确格式的手机号码',
            trigger: 'blur',
          },
        ],
        idCard: [
          {
            required: true,
            message: '请输入身份证号码',
            trigger: 'blur',
          },
          {
            pattern:
              /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/,
            message: '请输入正确格式的身份证号码',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
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
    addPerson() {
      this.dynamicValidateForm.persons.push({
        name: '',
        iphone: '',
        idCard: '',
      })
    },
  },
}
</script>


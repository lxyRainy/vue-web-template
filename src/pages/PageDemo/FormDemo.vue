<template>
  <div>
    <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    >
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="36%"
      :before-close="handleClose"
    >
      <el-form
        :model="modalForm"
        ref="modalForm"
        label-width="120px"
        class="demo-dynamic"
      >
        <el-row v-for="domain in persons" :key="domain.key">
          <el-form-item
            :label="domain.description"
            :prop="domain.key"
            :rules="rules[domain.key]"
          >
            <el-input
              v-model="modalForm[domain.key]"
              @change="changeForm($event)"
            ></el-input>
          </el-form-item>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('modalForm')"
            >提交</el-button
          >
          <!-- <el-button @click="addPerson">新增人员</el-button>
      <el-button @click="resetForm('modalForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
      <!-- <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span> -->
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      modalForm: {
        // phone: '13055559999',
        // sex: '1',
      },
      persons: [
        // {
        //   description: '手机号',
        //   value: '13055559999',
        //   key: 'phone',
        // },
        // {
        //   description: '性别',
        //   value: '1',
        //   key: 'sex',
        // },
      ],
      rules: {
        // sex: [
        //   {
        //     required: true,
        //     message: '请输入姓别',
        //     trigger: 'blur',
        //   },
        // ],
        // phone: [
        //   {
        //     required: true,
        //     message: '请输入手机号码',
        //     trigger: 'blur',
        //   },
        //   {
        //     pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
        //     message: '请输入正确格式的手机号码',
        //     trigger: 'blur',
        //   },
        // ],
        // idCard: [
        //   {
        //     required: true,
        //     message: '请输入身份证号码',
        //     trigger: 'blur',
        //   },
        //   {
        //     pattern:
        //       /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/,
        //     message: '请输入正确格式的身份证号码',
        //     trigger: 'blur',
        //   },
        // ],
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 1000);
  },
  methods: {
    changeForm() {
      this.$forceUpdate();
    },
    handleClose(done) {
      done();
    },
    init() {
      this.modalForm = {
        phone: "13055559999",
        sex: "1",
      };
      this.persons = [
        {
          description: "手机号",
          value: "13055559999",
          key: "phone",
        },
        {
          description: "性别",
          value: "1",
          key: "sex",
        },
      ];
      this.rules = {
        sex: [
          {
            required: true,
            message: "请输入姓别",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "blur",
          },
          {
            pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
            message: "请输入正确格式的手机号码",
            trigger: "blur",
          },
        ],
        idCard: [
          {
            required: true,
            message: "请输入身份证号码",
            trigger: "blur",
          },
          {
            pattern:
              /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/,
            message: "请输入正确格式的身份证号码",
            trigger: "blur",
          },
        ],
      };
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("this.modalForm", this.modalForm);
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    addPerson() {
      this.modalForm.persons.push({
        description: "",
        iphone: "",
        idCard: "",
      });
    },
  },
};
</script>


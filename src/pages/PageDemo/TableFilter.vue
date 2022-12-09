<template>
  <div class="OsaProject">
    <h1 style="align: center">
      element ui table pagination 分页情况下多页筛选
    </h1>
    <div>
      <el-table
        ref="filterTable"
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        border
        @filter-change="filterTagTable"
        style="width: 100%"
      >
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column
          filter-placement="bottom-end"
          :column-key="'name'"
          :filters="nametabledata"
          prop="name"
          label="姓名"
          width="180"
        >
          <template slot-scope="scope">
            <span disable-transitions>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          filter-placement="bottom-end"
          :column-key="'address'"
          :filters="addresstabledata"
          prop="address"
          label="地址"
        >
          <template slot-scope="scope">
            <span disable-transitions>{{ scope.row.address }}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          align="center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OsaProject",
  components: {},
  mounted() {
    localStorage.setItem("table", JSON.stringify(this.tableData));
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    filterTag(value, row) {
      return row.name === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    filterTagTable(filters) {
      console.log("filters", filters);
      this.twoData = [];
      this.selectdata[String(Object.keys(filters))] =
        filters[String(Object.keys(filters))];
      this.newData = JSON.parse(localStorage.getItem("table"));
      const selectedKeys = Object.keys(this.selectdata);
      for (let j = 0; j < selectedKeys.length; j++) {
        const key = selectedKeys[j];
        if (this.selectdata[key].length <= 1) {
          for (let k = 0; k < this.selectdata[key].length; k++) {
            for (let i = 0; i < this.newData.length; i++) {
              if (this.selectdata[key][k] !== this.newData[i][String(key)]) {
                this.newData.splice(i, 1);
                i--;
              }
            }
          }
        } else {
          // console.log('选择了多个')
          this.twoData = [];
          for (
            let k = 0;
            k < this.selectdata[Object.keys(this.selectdata)[j]].length;
            k++
          ) {
            for (let i = 0; i < this.newData.length; i++) {
              if (
                this.selectdata[Object.keys(this.selectdata)[j]][k] ===
                this.newData[i][String(Object.keys(this.selectdata)[j])]
              ) {
                this.twoData.push(this.newData[i]);
              }
            }
          }
          if (this.twoData.length !== 0) {
            this.newData = [];
            for (let io = 0; io < this.twoData.length; io++) {
              this.newData.push(this.twoData[io]);
            }
          }
        }
      }
      console.log(this.newData);
      this.tableData = this.newData;
    },
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      selectdata: { name: [], address: [] },
      newData: [],
      twoData: [],
      data: [],
      listdata: "",
      nametabledata: [
        { text: "张三", value: "张三" },
        { text: "王小虎", value: "王小虎" },
        { text: "李明", value: "李明" },
        { text: "王器", value: "王器" },
      ],
      addresstabledata: [
        { text: "北京市", value: "北京市" },
        { text: "内江市", value: "内江市" },
        { text: "上海市", value: "上海市" },
        { text: "成都市", value: "成都市" },
      ],
      listQuery: {
        status: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "张三",
          address: "北京市",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "北京市",
        },
        {
          date: "2016-05-01",
          name: "李明",
          address: "上海市",
        },
        {
          date: "2016-05-03",
          name: "王器",
          address: "成都市",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "内江市",
        },
        {
          date: "2016-05-01",
          name: "李明",
          address: "上海市",
        },
        {
          date: "2016-05-03",
          name: "王器",
          address: "成都市",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "内江市",
        },
        {
          date: "2016-05-01",
          name: "李明",
          address: "上海市",
        },
        {
          date: "2016-05-03",
          name: "王器",
          address: "成都市",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "内江市",
        },
        {
          date: "2016-05-01",
          name: "李明",
          address: "上海市",
        },
        {
          date: "2016-05-03",
          name: "王器",
          address: "成都市",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "内江市",
        },
        {
          date: "2016-05-01",
          name: "李明",
          address: "上海市",
        },
        {
          date: "2016-05-03",
          name: "王器",
          address: "成都市",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "内江市",
        },
        {
          date: "2016-05-01",
          name: "李明",
          address: "上海市",
        },
        {
          date: "2016-05-03",
          name: "王器",
          address: "成都市",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
</style>



import Mock from "mockjs";

// 首页 数据mock
let list = [];
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      list.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0)
        })
      );
    }
    return {
      code: 20000,
      data: {
        //饼图
        videoData: [
          {
            name: "小米",
            value: 2999
          },
          {
            name: "苹果",
            value: 5999
          },
          {
            name: "vivo",
            value: 1999
          },
          {
            name: "oppo",
            value: 1500
          },
          {
            name: "魅族",
            value: 2500
          },
          {
            name: "三星",
            value: 4999
          }
        ],
        //柱状图
        userData: [
          {
            date: "周一",
            new: 50,
            active: 550
          },
          {
            date: "周二",
            new: 55,
            active: 620
          },
          {
            date: "周三",
            new: 60,
            active: 660
          },
          {
            date: "周四",
            new: 40,
            active: 420
          },
          {
            date: "周五",
            new: 75,
            active: 800
          },
          {
            date: "周六",
            new: 56,
            active: 580
          },
          {
            date: "周日",
            new: 39,
            active: 410
          }
        ],
        // 折线图
        orderData: {
          date: [
            "20201001",
            "20201002",
            "20201003",
            "20201004",
            "20201005",
            "20201006",
            "20201007"
          ],
          data: list
        },
        tableData: [
          {
            name: "oppo",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000
          },
          {
            name: "vivo",
            todayBuy: 400,
            monthBuy: 3000,
            totalBuy: 25000
          },
          {
            name: "苹果",
            todayBuy: 50,
            monthBuy: 2000,
            totalBuy: 23000
          },
          {
            name: "小米",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000
          },
          {
            name: "三星",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000
          },
          {
            name: "魅族",
            todayBuy: 360,
            monthBuy: 3400,
            totalBuy: 21000
          }
        ]
      }
    };
  }
};

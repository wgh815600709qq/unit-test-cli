// 系统测试入口

// -src 测试用例入口

const params = process.argv[2];

if (params === undefined) { // 全部
    // src文件目录
} else { // 单个
    console.log(`start testing ${params}`)

    require(`./src/${params}`);
}
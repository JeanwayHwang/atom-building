const atomCompiler = require('@baidu/atom-web-compiler');
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../src/search-ui/');

fileDisplay(filePath);
// 遍历search-ui组件目录
function fileDisplay(filePath) {
    // 根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, (err,files) => {
        if(err) {
            console.warn(err);
            return;
        }
        // 遍历读取到的文件列表
        files.forEach(filename => {
            // 获取当前文件的绝对路径
            var filedir = path.join(filePath, filename);
            //根据文件路径获取文件信息，返回一个fs.Stats对象
            fs.stat(filedir,function(error, stats){
                if(error){
                    console.warn('获取文件stats失败');
                    return;
                }
                var isFile = stats.isFile();//是文件
                var isDir = stats.isDirectory();//是文件夹
                if(isFile && path.extname(filedir) === '.atom'){
                    let targetFolder = filedir.split('search-ui/')[1].split('/')[0];
　　　　　　　　　　　　// 读取文件内容
                    var content = fs.readFileSync(filedir, 'utf-8');
                    atomCompile(content, targetFolder, filename.replace('.atom', ''));
                }
                if(isDir){
                    // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
                    fileDisplay(filedir);
                }
            });
        });
    });
}

function atomCompile(content, folderName, fileName) {
    const result = atomCompiler.compile({
        content
    });
    const {compiled} = result;
    compiled.js = compiled.js.replace(/search-ui\//g, '../');
    let targetPath = path.join(__dirname, `../src/renderer/search-ui/${folderName}`);
    fs.mkdir(targetPath, error => {
        let filePath = `${targetPath}/${fileName}.js`;
        fs.writeFile(filePath, compiled.js, err => {
            console.log(`${err ? '写入失败' : '写入成功'} —— ${fileName}`);
        });
        // css文件采用追加方式写入
        fs.appendFile(path.join(__dirname, `../src/renderer/asset/main.css`), compiled.css, err => {
            if (err) throw err;
        });
    });
}
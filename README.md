# streaming-fc-uncompress-service-for-oss
<a name="Qr5Fy"></a>
## 背景

阿里云函数计算是事件驱动的全托管计算服务。通过函数计算，您无需管理服务器等基础设施，只需编写代码并上传。函数计算会为您准备好计算资源，以弹性、可靠的方式运行您的代码，并提供日志查询、性能监控、报警等功能。借助于函数计算，您可以快速构建任何类型的应用和服务，无需管理和运维。而且，您只需要为代码实际运行所消耗的资源付费，代码未运行则不产生费用。

这里我们提供一个 fun 模板，帮助我们更快地搭建一个基于函数计算实现对上传的压缩文件自动解压的项目，并预置了编译、打包、调试和发布等开箱即用的功能。

本模板并没有完全把压缩文件的内容全部通过 FC 作为 中转站来处理，而是采用**流式法**，适用于较大文件的处理。关于流式法以及函数计算实现 oss 上传压缩文件自动压缩的处理，请参照云栖社区文章[函数计算实现 oss 上传超大 zip 压缩文件的自动解压处理](https://yq.aliyun.com/articles/680958)。

另外如果您没有超大 zip 自动解压的需求，请使用另一[简单模板](https://github.com/coco-super/simple-fc-uncompress-service-for-oss)，一切在内存中完成，适合较小的压缩文件解压。<br />
<a name="QqxEg"></a>
## 快速开始

<a name="lGvKc"></a>
### 1.安装 node 
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
nvm install 8
```

<a name="vYqDd"></a>
### 2.安装 fun 工具

```bash
npm install @alicloud/fun -g
```

fun 工具的某些子命令可能会用到 docker，所以你需要安装好 docker，具体参考文档：[Fun 安装教程](https://github.com/aliyun/fun/blob/master/docs/usage/installation-zh.md)。

<a name="dP8XW"></a>
### 3.通过 fun 模板生成项目骨架
使用 fun init 命令可以快捷的将本模板项目初始化到本地，执行命令 ：

```powershell
fun init -n xxx https://github.com/coco-super/streaming-fc-service-for-oss
```

其中 -n 表示要作为文件夹生成的项目名称。默认值是 fun-app。更多fun init 命令格式选项说明请参考云栖文章[开发函数计算的正确姿势 —— 使用 Fun Init 初始化项目](https://yq.aliyun.com/articles/674363)。

```powershell
PS D:\> fun init -n demo  https://github.com/coco-super/streaming-fc-uncompress-service-for-oss
start cloning...
Cloning into 'streaming-fc-uncompress-service-for-oss'...
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 9 (delta 0), reused 5 (delta 0), pack-reused 0
Unpacking objects: 100% (9/9), done.
finish cloning.
? Please input oss bucketName? coco-superme
? Please input prefix? sunfeiyu/
? Please choose a file suffix? .zip
Start rendering template...
+ D:\demo
+ D:\demo\helper.py
+ D:\demo\index.py
+ D:\demo\ossZipfile.py
+ D:\demo\template.yml
finish rendering template.
```

上面会提示：

1. 输入一个 OSS 的 bucketName，注意 OSS Bucket 是全球唯一的，请输入提前创建好的 bucketName（已经创建好的，请确保 region 一致）。
1. 输入 OSS 的 bucket 中的指定目录。
1. 选择文件的后缀名。

<a name="ECcD2"></a>
### 4.服务部署

```bash
PS D:\demo> fun deploy
using region: cn-shanghai
using accountId: ***********8320
using accessKeyId: ***********vHqQ
using timeout: 10

Waiting for service demo to be deployed...
        Waiting for function demo to be deployed...
                Waiting for packaging function demo code...
                package function demo code done
                Waiting for OSS trigger demo-trigger to be deployed...
                function demo-trigger deploy success
        function demo deploy success
service demo deploy success
```

<a name="qGibX"></a>
## 测试
<a name="rgcDQ"></a>
### 上传压缩文件到 OSS
在 coco-superme 的 bucket 中上传名为 fun.zip 的压缩文件

![1.png](/figures/1.png)


上传成功后，触发函数计算自动压缩 fun.zip 文件并上传回 OSS 指定目录。指定目录以上传文件名为目录名。<br />刷新页面，发现 fun/ 目录下已生成解压后文件。

![2.png](/figures/2.png)

<a name="2473ec5a"></a>
## 参考阅读

1. [三分钟学会如何在函数计算中使用 puppeteer](https://yq.aliyun.com/articles/602877)
1. [Fun (Fun with Serverless) 工具](https://github.com/aliyun/fun/)
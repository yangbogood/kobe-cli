# kobe-cli 
```
具体参考的是https://juejin.im/post/5c4a6fcd518825469414e062#heading-0 
仅供自己学习使用
```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn fix
```
### New components 
```
yarn new:add
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
## 开发人员工作流

1. 建立自己的分支
    ``` bash
      git clone xxx
      
      git checkout dev
      
      git checkout -b fenzhi(fenzhi是自己的分支) 
    ```
    
2. 开发
    ``` bash
    git add .

    git commit -m "xxx"
    ```
    
3. 变基
    ``` bash
      git fetch

      git rebase -i origin/dev
      
      进入交互界面，pick自己的更改
    ```
4. 解决冲突(没有冲突的话，结束)
    ```
    git add .
    
    git rebase --continue
    ```
5. 提交代码
   ```bash
   git push -f
   ```
 6. 提交MR,告诉相关review代码的人

## Master管理代码的流程

  1. 配置git
     git config -e 修改git配置
     ```bash
      fetch = +refs/merge-requests/*/head:refs/remotes/origin/merge-requests/*
     ```
  2. 收到MR通知
  3. Review代码
  4. 确定没有git behind
  5. 合并（绝对**不可以**git push -f）
      ```bash
      git fetch
      git merge origin/merge-requests/832(832为MR编号)
      如果看到fast-forward，可以git push
      如果没有fast-forward，reset掉，叫开发重新rebase
      ```

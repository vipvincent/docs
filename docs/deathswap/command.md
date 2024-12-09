---
sidebar_position: 2
pagination_next:  null 
description: 死亡交換指令列表
---

# 指令列表

### 重新載入檔案

`/reload`   
僅限OP玩家操作  

### 安裝死亡交換

`/function deathswap:install`     
僅限OP玩家操作   
查看更多在[安裝教學](./install)

### 解除安裝死亡交換

 `/function deathswap:uninstall`   
僅限OP玩家操作

### 重新安裝死亡交換

 `/function deathswap:reinstall`   
僅限OP玩家操作

### 語言介面

`/trigger deathswap set 10`   
具有管理員權限的玩家可以使用  

或者

`/function deathswap:ui/language`   
僅限OP玩家操作 

![language](./img/language_menu.png)

<details>
<summary>直接設定語言</summary>

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

#### 對於管理員權限的玩家

<Tabs groupId="language">
  <TabItem value="en" label="English">`/trigger deathswap set 11`</TabItem>
  <TabItem value="tw" label="中文">`/trigger deathswap set 12`</TabItem>
</Tabs>

#### 對於OP玩家
<Tabs groupId="language">
  <TabItem value="en" label="English">`/function deathswap:setting/language/en`</TabItem>
  <TabItem value="tw" label="中文">`/function deathswap:setting/language/tw`</TabItem>
</Tabs>

</details>

### 給予管理員權限

`/tag <玩家> add admin`   
僅限OP玩家操作    
也可以直接切換到創造模式獲得管理員權限

例如：  
`/tag @s add admin` 給予自己管理員權限  
`/tag Alex add admin` 給予玩家Alex管理員權限

### 移除管理員權限

`/tag <玩家> remove admin`   
僅限OP玩家操作

例如：  
`/tag @s remove admin` 移除自己管理員權限  
`/tag Alex remove admin` 移除玩家Alex管理員權限

### 重製遊戲

`/trigger deathswap set 5`   
具有管理員權限的玩家可以使用

或者

`/function deathswap:reset`  
僅限OP玩家操作
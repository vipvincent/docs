---
sidebar_position: 2
pagination_next:  null 
description: Death Swap command list
---

# Command List

### Reload File

`/reload`   
Only for OP players  

### Install Death Swap

`/function deathswap:install`     
Only for OP players    
See More in the [Installation Guide](./install)

### Unstall Death Swap

 `/function deathswap:uninstall`   
Only for OP players 

### Restall Death Swap

 `/function deathswap:reinstall`   
Only for OP players 

### Language interface

`/trigger deathswap set 10`   
Admin right players can do it   

Or

`/function deathswap:ui/language`   
Only for OP players  

![language](./img/language_menu.png)

<details>
<summary>Set language directly</summary>

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

#### For players with administrator rights

<Tabs groupId="language">
  <TabItem value="en" label="English">`/trigger deathswap set 11`</TabItem>
  <TabItem value="tw" label="中文">`/trigger deathswap set 12`</TabItem>
</Tabs>

#### For OP players
<Tabs groupId="language">
  <TabItem value="en" label="English">`/function deathswap:setting/language/en`</TabItem>
  <TabItem value="tw" label="中文">`/function deathswap:setting/language/tw`</TabItem>
</Tabs>

</details>

### Give admin rights

`/tag <玩家> add admin`   
Only for OP players    
You can also switch directly to creative mode to obtain administrator rights

Example:  
`/tag @s add admin` Give your admin rights  
`/tag Alex add admin` Give player Alex admin rights

### Remove admin rights

`/tag <玩家> remove admin`   
Only for OP players

Example:  
`/tag @s remove admin` Remove your admin rights  
`/tag Alex remove admin` Remove player Alex's admin rights

### Reset Game

`/trigger deathswap set 5`   
Admin right players can do it.

Or

`/function deathswap:reset`  
Only for OP players
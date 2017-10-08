const uuid = require('uuid/v4');
const fs = require('fs');
const path = require('path');

let a = `Control + Space</code> 基本的代码补全（补全任何类、方法、变量）</li>
Control + Shift + Space</code> 智能代码补全（过滤器方法列表和变量的预期类型）</li>
Command + Shift + Enter</code> 自动结束代码，行末自动添加分号</li>
Command + P</code> 显示方法的参数信息</li>
Control + J</code> 快速查看文档</li>
Shift + F1</code> 查看外部文档（在某些代码上会触发打开浏览器显示相关文档）</li>
Command + 鼠标放在代码上</code> 显示代码简要信息</li>
Command + F1</code> 在错误或警告处显示具体描述信息</li>
Command + N, Control + Enter, Control + N</code> 生成代码（getter、setter、构造函数、hashCode/equals,toString）</li>
Control + O</code> 覆盖方法（重写父类方法）</li>
Control + I</code> 实现方法（实现接口中的方法）</li>
Command + Option + T</code> 包围代码（使用if..else, try..catch, for, synchronized等包围选中的代码）</li>
Command + /</code> 注释/取消注释与行注释</li>
Command + Option + /</code> 注释/取消注释与块注释</li>
Option + 方向键上</code> 连续选中代码块</li>
Option + 方向键下</code> 减少当前选中的代码块</li>
Control + Shift + Q</code> 显示上下文信息</li>
Option + Enter</code> 显示意向动作和快速修复代码</li>
Command + Option + L</code> 格式化代码</li>
Control + Option + O</code> 优化import</li>
Control + Option + I</code> 自动缩进线</li>
Tab / Shift + Tab</code> 缩进代码 / 反缩进代码</li>
Command + X</code> 剪切当前行或选定的块到剪贴板</li>
Command + C</code> 复制当前行或选定的块到剪贴板</li>
Command + V</code> 从剪贴板粘贴</li>
Command + Shift + V</code> 从最近的缓冲区粘贴</li>
Command + D</code> 复制当前行或选定的块</li>
Command + Delete</code> 删除当前行或选定的块的行</li>
Control + Shift + J</code> 智能的将代码拼接成一行</li>
Command + Enter</code> 智能的拆分拼接的行</li>
Shift + Enter</code> 开始新的一行</li>
Command + Shift + U</code> 大小写切换</li>
Command + Shift + ] / Command + Shift + [</code> 选择直到代码块结束/开始 </li>
Option + Fn + Delete</code> 删除到单词的末尾</li>
Option + Delete</code> 删除到单词的开头</li>
Command + 加号 / Command + 减号</code> 展开 / 折叠代码块</li>
Command + Shift + 加号</code> 展开所以代码块</li>
Command + Shift + 减号</code> 折叠所有代码块</li>
Command + W</code> 关闭活动的编辑器选项卡</li>
Double Shift</code> 查询任何东西</li>
Command + F</code> 文件内查找</li>
Command + G</code> 查找模式下，向下查找</li>
Command + Shift + G</code> 查找模式下，向上查找</li>
Command + R</code> 文件内替换</li>
Command + Shift + F</code> 全局查找（根据路径）</li>
Command + Shift + R</code> 全局替换（根据路径）</li>
Command + Shift + S</code> 查询结构（Ultimate Edition 版专用，需要在Keymap中设置）</li>
Command + Shift + M</code> 替换结构（Ultimate Edition 版专用，需要在Keymap中设置）</li>
Option + F7 / Command + F7</code> 在文件中查找用法 / 在类中查找用法</li>
Command + Shift + F7</code> 在文件中突出显示的用法</li>
Command + Option + F7</code> 显示用法</li>
Command + F9</code> 编译Project</li>
Command + Shift + F9</code> 编译选择的文件、包或模块</li>
Control + Option + R</code> 弹出 Run 的可选择菜单</li>
Control + Option + D</code> 弹出 Debug 的可选择菜单</li>
Control + R</code> 运行</li>
Control + D</code> 调试</li>
Control + Shift + R, Control + Shift + D</code> 从编辑器运行上下文环境配置</li>
F8</code> 进入下一步，如果当前行断点是一个方法，则不进入当前方法体内</li>
F7</code> 进入下一步，如果当前行断点是一个方法，则进入当前方法体内，如果该方法体还有方法，则不会进入该内嵌的方法中</li>
Shift + F7</code> 智能步入，断点所在行上有多个方法调用，会弹出进入哪个方法</li>
Shift + F8</code> 跳出</li>
Option + F9</code> 运行到光标处，如果光标前有其他断点会进入到该断点</li>
Option + F8</code> 计算表达式（可以更改变量值使其生效）</li>
Command + Option + R</code> 恢复程序运行，如果该断点下面代码还有断点则停在下一个断点上</li>
Command + F8</code> 切换断点（若光标当前行有断点则取消断点，没有则加上断点）</li>
Command + Shift + F8</code> 查看断点信息</li>
Command + O</code> 查找类文件</li>
Command + Shift + O</code> 查找所有类型文件、打开文件、打开目录，打开目录需要在输入的内容前面或后面加一个反斜杠/</code></li>
Command + Option + O</code> 前往指定的变量 / 方法</li>
Control + 方向键左 / Control + 方向键右</code> 左右切换打开的编辑tab页</li>
F12</code> 返回到前一个工具窗口</li>
Esc</code> 从工具窗口进入代码文件窗口</li>
Shift + Esc</code> 隐藏当前或最后一个活动的窗口，且光标进入代码文件窗口</li>
Command + Shift + F4</code> 关闭活动run/messages/find/... tab</li>
Command + L</code> 在当前文件跳转到某一行的指定处</li>
Command + E</code> 显示最近打开的文件记录列表</li>
Option + 方向键左 / Option + 方向键右</code> 光标跳转到当前单词 / 中文句的左 / 右侧开头位置</li>
Command + Option + 方向键左 / Command + Option + 方向键右</code> 退回 / 前进到上一个操作的地方</li>
Command + Shift + Delete</code> 跳转到最后一个编辑的地方</li>
Option + F1</code> 显示当前文件选择目标弹出层，弹出层中有很多目标可以进行选择(如在代码编辑窗口可以选择显示该文件的Finder)</li>
Command + B / Command +  鼠标点击</code> 进入光标所在的方法/变量的接口或是定义处</li>
Command + Option + B</code> 跳转到实现处，在某个调用的方法名上使用会跳到具体的实现处，可以跳过接口</li>
Option + Space, Command + Y</code> 快速打开光标所在方法、类的定义</li>
Control + Shift + B</code> 跳转到类型声明处</li>
Command + U</code> 前往当前光标所在方法的父类的方法 / 接口定义</li>
Control + 方向键下 / Control + 方向键上</code> 当前光标跳转到当前文件的前一个/后一个方法名位置</li>
Command + ] / Command + [</code> 移动光标到当前所在代码的花括号开始/结束位置</li>
Command + F12</code> 弹出当前文件结构层，可以在弹出的层上直接输入进行筛选（可用于搜索类中的方法）</li>
Control + H</code> 显示当前类的层次结构</li>
Command + Shift + H</code> 显示方法层次结构</li>
Control + Option + H</code> 显示调用层次结构</li>
F2 / Shift + F2</code> 跳转到下一个/上一个突出错误或警告的位置</li>
F4 / Command + 方向键下</code> 编辑/查看代码源</li>
Option + Home</code> 显示到当前文件的导航条</li>
F3</code>选中文件/文件夹/代码行，添加/取消书签</li>
Option + F3</code> 选中文件/文件夹/代码行，使用助记符添加/取消书签</li>
Control + 0...Control + 9</code> 定位到对应数值的书签位置</li>
Command + F3</code> 显示所有书签</li>
F5</code> 复制文件到指定目录</li>
F6</code> 移动文件到指定目录</li>
Command + Delete</code> 在文件上为安全删除文件，弹出确认框</li>
Shift + F6</code> 重命名文件</li>
Command + F6</code> 更改签名</li>
Command + Option + N</code> 一致性</li>
Command + Option + M</code> 将选中的代码提取为方法</li>
Command + Option + V</code> 提取变量</li>
Command + Option + F</code> 提取字段</li>
Command + Option + C</code> 提取常量</li>
Command + Option + P</code> 提取参数</li>
Command + K</code> 提交代码到版本控制器</li>
Command + T</code> 从版本控制器更新代码</li>
Option + Shift + C</code> 查看最近的变更记录</li>
Control + C</code> 快速弹出版本控制器操作面板</li>
Command + Option + J</code> 弹出模板选择窗口，将选定的代码使用动态模板包住</li>
Command + J</code> 插入自定义动态代码模板</li>
Command + 1...Command + 9</code> 打开相应编号的工具窗口</li>
Command + S</code> 保存所有</li>
Command + Option + Y</code> 同步、刷新</li>
Control + Command + F</code> 切换全屏模式</li>
Command + Shift + F12</code> 切换最大化编辑器</li>
Option + Shift + F</code> 添加到收藏夹</li>
Option + Shift + I</code> 检查当前文件与当前的配置文件</li>
Command + ,</code> 打开IDEA系统设置</li>
Command + ;</code> 打开项目结构对话框</li>
Shift + Command + A</code> 查找动作（可设置相关选项）</li>
Control + Shift + Tab</code> 编辑窗口标签和工具窗口之间切换（如果在切换的过程加按上delete，则是关闭对应选中的窗口）</li>
Command + Shift +8</code> 竖编辑模式</li>`;

// console.log(a.split('</li>'));

a.split('</li>').forEach((item) => {
    // console.log(item.split("</code> "));
    // console.log(uuid());

    let contextString =
        `INSERT INTO \`t_shortcut\` (\`id\`, \`shortcut_describe\`, \`shortcut_key\`) VALUES ( \'${uuid()}\', \'${item.split("</code> ")[1]}\', \'${item.split("</code> ")[0].trim()}\');`;

    console.log(contextString);
    // fs.appendFile(path.resolve(__dirname, '../backend/src/main/java/com/future_star_shortcut_exercise/refreshMysql.sql'), contextString, (err)=> {
    //     console.log("OK!");
    // })
});





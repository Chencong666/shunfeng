/*
Navicat MySQL Data Transfer

Source Server         : zy
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : shunfeng

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-02-18 09:12:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `pinlun` varchar(255) DEFAULT NULL,
  `num` int(11) NOT NULL,
  `zong` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `pinlun` float(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=109 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '潮香村 精选牛肉串 200g', '29.90', 'img/buy1.jpg', '51');
INSERT INTO `list` VALUES ('2', '德亚Weidendorf 全脂牛奶礼盒 200ml*10', '39.00', 'img/buy2.png', '76');
INSERT INTO `list` VALUES ('3', '泰国烤椰COCONUT 12个装', '129.00', 'img/buy3.png', '84');
INSERT INTO `list` VALUES ('4', '马爹利 MARTELL 蓝带干邑白兰地 700ml', '1249.00', 'img/buy4.png', '123');
INSERT INTO `list` VALUES ('5', '卡昵诗 什锦水果汽水味糖果', '19.90', 'img/xian1.jpg', '162');
INSERT INTO `list` VALUES ('6', '总统牌 PRESIDENT 马苏里拉匹萨专用奶酪片 200g', '28.90', 'img/xian2.jpg', '201');
INSERT INTO `list` VALUES ('7', '维他 菊花茶 250ml*24', '62.00', 'img/xian3.jpg', '240');
INSERT INTO `list` VALUES ('8', '五木 熊本香辣猪骨味拉面（方便面） 103g', '12.50', 'img/xian4.jpg', '279');
INSERT INTO `list` VALUES ('9', '益昌老街 AIK CHEONG OLD TOWN 二合一白咖啡 450g', '42.00', 'img/xian5.jpg', '318');
INSERT INTO `list` VALUES ('10', '誉福园 湖北秭归纽荷尔脐橙5斤装 买1送1 合并发10斤 单果150一180g', '59.00', 'img/shui1.jpg', '225');
INSERT INTO `list` VALUES ('11', '爱常鲜儿 新疆阿克苏苹果4.5斤(约10~15个果) 果径70~80mm 2.25kg', '49.90', 'img/shui2.jpg', '132');
INSERT INTO `list` VALUES ('12', '泰国 椰青/粒 700g*9粒（整箱装）', '99.00', 'img/shui3.jpg', '39');
INSERT INTO `list` VALUES ('13', '花果山 新疆库尔勒精品香梨 2.5kg', '59.90', 'img/shui4.jpg', '42');
INSERT INTO `list` VALUES ('14', '方家铺子 新疆红枣灰枣 500g', '39.90', 'img/tui1.jpg', '65');
INSERT INTO `list` VALUES ('15', '方家铺子 南北山珍干货五福齐全礼盒 826g', '169.00', 'img/tui2.jpg', '88');
INSERT INTO `list` VALUES ('16', '兰格维特Lungavita 特级初榨橄榄油礼盒 1L*2', '148.00', 'img/tui3.jpg', '111');
INSERT INTO `list` VALUES ('17', '柴火大院 五常稻花香大米 5kg', '69.90', 'img/tui4.jpg', '134');
INSERT INTO `list` VALUES ('18', '爱氏晨曦 Arla 全脂牛奶 200ml*24', '69.90', 'img/tui5.jpg', '157');
INSERT INTO `list` VALUES ('19', '茅台醇封坛原浆 私藏级 52度500ml', '168.00', 'img/tui6.jpg', '180');
INSERT INTO `list` VALUES ('20', '伊桐 经典优选赤霞珠红葡萄酒双支木盒装 750ml*2', '128.00', 'img/tui7.jpg', '203');
INSERT INTO `list` VALUES ('21', '欧瑞安 奥兰国际象棋干红葡萄酒 750ml*6', '228.00', 'img/tui8.jpg', '226');
INSERT INTO `list` VALUES ('22', 'U选一品 抽肠大带鱼 580g', '35.80', 'img/tui9.jpg', '249');
INSERT INTO `list` VALUES ('23', 'Champmar 厄瓜多尔白虾 40/50 1kg', '98.00', 'img/tui10.jpg', '272');
INSERT INTO `list` VALUES ('24', '泰国烤椰COCONUT 1个装 单果400-500g 新品尝鲜！', '15.00', 'img/list_1.jpg', '2571');
INSERT INTO `list` VALUES ('25', '山东烟台红富士苹果12枚装 单果85mm', '38.00', 'img/list_2.jpg', '648');
INSERT INTO `list` VALUES ('26', '果缤纷 进口优选蓝莓 125g*4盒', '61.00', 'img/list_3.jpg', '5125');
INSERT INTO `list` VALUES ('27', '果缤纷 墨西哥优选牛油果6粒 买一赠一 实发12粒 约1250g', '84.00', 'img/list_4.jpg', '5002');
INSERT INTO `list` VALUES ('28', '潮香村 精选牛肉串 200g', '29.90', 'img/buy1.jpg', '4879');
INSERT INTO `list` VALUES ('29', '德亚Weidendorf 全脂牛奶礼盒 200ml*10', '39.00', 'img/buy2.png', '4756');
INSERT INTO `list` VALUES ('30', '泰国烤椰COCONUT 12个装', '129.00', 'img/buy3.png', '4633');
INSERT INTO `list` VALUES ('31', '马爹利 MARTELL 蓝带干邑白兰地 700ml', '1249.00', 'img/buy4.png', '4510');
INSERT INTO `list` VALUES ('32', '卡昵诗 什锦水果汽水味糖果', '19.90', 'img/xian1.jpg', '4387');
INSERT INTO `list` VALUES ('33', '总统牌 PRESIDENT 马苏里拉匹萨专用奶酪片 200g', '28.90', 'img/xian2.jpg', '4264');
INSERT INTO `list` VALUES ('34', '维他 菊花茶 250ml*24', '62.00', 'img/xian3.jpg', '4141');
INSERT INTO `list` VALUES ('35', '五木 熊本香辣猪骨味拉面（方便面） 103g', '12.50', 'img/xian4.jpg', '4018');
INSERT INTO `list` VALUES ('36', '益昌老街 AIK CHEONG OLD TOWN 二合一白咖啡 450g', '42.00', 'img/xian5.jpg', '3895');
INSERT INTO `list` VALUES ('37', '誉福园 湖北秭归纽荷尔脐橙5斤装 买1送1 合并发10斤 单果150一180g', '59.00', 'img/shui1.jpg', '3772');
INSERT INTO `list` VALUES ('38', '爱常鲜儿 新疆阿克苏苹果4.5斤(约10~15个果) 果径70~80mm 2.25kg', '49.90', 'img/shui2.jpg', '3649');
INSERT INTO `list` VALUES ('39', '泰国 椰青/粒 700g*9粒（整箱装）', '99.00', 'img/shui3.jpg', '3526');
INSERT INTO `list` VALUES ('40', '花果山 新疆库尔勒精品香梨 2.5kg', '59.90', 'img/shui4.jpg', '3403');
INSERT INTO `list` VALUES ('41', '方家铺子 新疆红枣灰枣 500g', '39.90', 'img/tui1.jpg', '3280');
INSERT INTO `list` VALUES ('42', '方家铺子 南北山珍干货五福齐全礼盒 826g', '169.00', 'img/tui2.jpg', '3157');
INSERT INTO `list` VALUES ('43', '兰格维特Lungavita 特级初榨橄榄油礼盒 1L*2', '148.00', 'img/tui3.jpg', '3034');
INSERT INTO `list` VALUES ('44', '柴火大院 五常稻花香大米 5kg', '69.90', 'img/tui4.jpg', '2911');
INSERT INTO `list` VALUES ('45', '爱氏晨曦 Arla 全脂牛奶 200ml*24', '69.90', 'img/tui5.jpg', '2788');
INSERT INTO `list` VALUES ('46', '茅台醇封坛原浆 私藏级 52度500ml', '168.00', 'img/tui6.jpg', '2665');
INSERT INTO `list` VALUES ('47', '伊桐 经典优选赤霞珠红葡萄酒双支木盒装 750ml*2', '128.00', 'img/tui7.jpg', '2542');
INSERT INTO `list` VALUES ('48', '欧瑞安 奥兰国际象棋干红葡萄酒 750ml*6', '228.00', 'img/tui8.jpg', '2419');
INSERT INTO `list` VALUES ('49', 'U选一品 抽肠大带鱼 580g', '35.80', 'img/tui9.jpg', '2296');
INSERT INTO `list` VALUES ('50', 'Champmar 厄瓜多尔白虾 40/50 1kg', '98.00', 'img/tui10.jpg', '2173');
INSERT INTO `list` VALUES ('51', '泰国烤椰COCONUT 1个装 单果400-500g 新品尝鲜！', '15.00', 'img/list_1.jpg', '2050');
INSERT INTO `list` VALUES ('52', '山东烟台红富士苹果12枚装 单果85mm', '38.00', 'img/list_2.jpg', '1927');
INSERT INTO `list` VALUES ('53', '果缤纷 进口优选蓝莓 125g*4盒', '61.00', 'img/list_3.jpg', '1804');
INSERT INTO `list` VALUES ('54', '果缤纷 墨西哥优选牛油果6粒 买一赠一 实发12粒 约1250g', '84.00', 'img/list_4.jpg', '1681');
INSERT INTO `list` VALUES ('55', '潮香村 精选牛肉串 200g', '29.90', 'img/buy1.jpg', '1558');
INSERT INTO `list` VALUES ('56', '德亚Weidendorf 全脂牛奶礼盒 200ml*10', '39.00', 'img/buy2.png', '1435');
INSERT INTO `list` VALUES ('57', '泰国烤椰COCONUT 12个装', '129.00', 'img/buy3.png', '1312');
INSERT INTO `list` VALUES ('58', '马爹利 MARTELL 蓝带干邑白兰地 700ml', '1249.00', 'img/buy4.png', '1189');
INSERT INTO `list` VALUES ('59', '卡昵诗 什锦水果汽水味糖果', '19.90', 'img/xian1.jpg', '1066');
INSERT INTO `list` VALUES ('60', '总统牌 PRESIDENT 马苏里拉匹萨专用奶酪片 200g', '28.90', 'img/xian2.jpg', '943');
INSERT INTO `list` VALUES ('61', '维他 菊花茶 250ml*24', '62.00', 'img/xian3.jpg', '820');
INSERT INTO `list` VALUES ('62', '五木 熊本香辣猪骨味拉面（方便面） 103g', '12.50', 'img/xian4.jpg', '697');
INSERT INTO `list` VALUES ('63', '益昌老街 AIK CHEONG OLD TOWN 二合一白咖啡 450g', '42.00', 'img/xian5.jpg', '574');
INSERT INTO `list` VALUES ('64', '誉福园 湖北秭归纽荷尔脐橙5斤装 买1送1 合并发10斤 单果150一180g', '59.00', 'img/shui1.jpg', '451');
INSERT INTO `list` VALUES ('65', '爱常鲜儿 新疆阿克苏苹果4.5斤(约10~15个果) 果径70~80mm 2.25kg', '49.90', 'img/shui2.jpg', '328');
INSERT INTO `list` VALUES ('66', '泰国 椰青/粒 700g*9粒（整箱装）', '99.00', 'img/shui3.jpg', '205');
INSERT INTO `list` VALUES ('67', '花果山 新疆库尔勒精品香梨 2.5kg', '59.90', 'img/shui4.jpg', '82');
INSERT INTO `list` VALUES ('68', '方家铺子 新疆红枣灰枣 500g', '39.90', 'img/tui1.jpg', '145');
INSERT INTO `list` VALUES ('69', '方家铺子 南北山珍干货五福齐全礼盒 826g', '169.00', 'img/tui2.jpg', '208');
INSERT INTO `list` VALUES ('70', '兰格维特Lungavita 特级初榨橄榄油礼盒 1L*2', '148.00', 'img/tui3.jpg', '271');
INSERT INTO `list` VALUES ('71', '柴火大院 五常稻花香大米 5kg', '69.90', 'img/tui4.jpg', '334');
INSERT INTO `list` VALUES ('72', '爱氏晨曦 Arla 全脂牛奶 200ml*24', '69.90', 'img/tui5.jpg', '397');
INSERT INTO `list` VALUES ('73', '茅台醇封坛原浆 私藏级 52度500ml', '168.00', 'img/tui6.jpg', '460');
INSERT INTO `list` VALUES ('74', '伊桐 经典优选赤霞珠红葡萄酒双支木盒装 750ml*2', '128.00', 'img/tui7.jpg', '523');
INSERT INTO `list` VALUES ('75', '欧瑞安 奥兰国际象棋干红葡萄酒 750ml*6', '228.00', 'img/tui8.jpg', '586');
INSERT INTO `list` VALUES ('76', 'U选一品 抽肠大带鱼 580g', '35.80', 'img/tui9.jpg', '649');
INSERT INTO `list` VALUES ('77', 'Champmar 厄瓜多尔白虾 40/50 1kg', '98.00', 'img/tui10.jpg', '712');
INSERT INTO `list` VALUES ('78', '泰国烤椰COCONUT 1个装 单果400-500g 新品尝鲜！', '15.00', 'img/list_1.jpg', '775');
INSERT INTO `list` VALUES ('79', '山东烟台红富士苹果12枚装 单果85mm', '38.00', 'img/list_2.jpg', '838');
INSERT INTO `list` VALUES ('80', '果缤纷 进口优选蓝莓 125g*4盒', '61.00', 'img/list_3.jpg', '901');
INSERT INTO `list` VALUES ('81', '果缤纷 墨西哥优选牛油果6粒 买一赠一 实发12粒 约1250g', '84.00', 'img/list_4.jpg', '964');
INSERT INTO `list` VALUES ('82', '潮香村 精选牛肉串 200g', '29.90', 'img/buy1.jpg', '1027');
INSERT INTO `list` VALUES ('83', '德亚Weidendorf 全脂牛奶礼盒 200ml*10', '39.00', 'img/buy2.png', '1090');
INSERT INTO `list` VALUES ('84', '泰国烤椰COCONUT 12个装', '129.00', 'img/buy3.png', '1153');
INSERT INTO `list` VALUES ('85', '马爹利 MARTELL 蓝带干邑白兰地 700ml', '1249.00', 'img/buy4.png', '1216');
INSERT INTO `list` VALUES ('86', '卡昵诗 什锦水果汽水味糖果', '19.90', 'img/xian1.jpg', '1279');
INSERT INTO `list` VALUES ('87', '总统牌 PRESIDENT 马苏里拉匹萨专用奶酪片 200g', '28.90', 'img/xian2.jpg', '1342');
INSERT INTO `list` VALUES ('88', '维他 菊花茶 250ml*24', '62.00', 'img/xian3.jpg', '1405');
INSERT INTO `list` VALUES ('89', '五木 熊本香辣猪骨味拉面（方便面） 103g', '12.50', 'img/xian4.jpg', '1468');
INSERT INTO `list` VALUES ('90', '益昌老街 AIK CHEONG OLD TOWN 二合一白咖啡 450g', '42.00', 'img/xian5.jpg', '1531');
INSERT INTO `list` VALUES ('91', '誉福园 湖北秭归纽荷尔脐橙5斤装 买1送1 合并发10斤 单果150一180g', '59.00', 'img/shui1.jpg', '1594');
INSERT INTO `list` VALUES ('92', '爱常鲜儿 新疆阿克苏苹果4.5斤(约10~15个果) 果径70~80mm 2.25kg', '49.90', 'img/shui2.jpg', '1657');
INSERT INTO `list` VALUES ('93', '泰国 椰青/粒 700g*9粒（整箱装）', '99.00', 'img/shui3.jpg', '1720');
INSERT INTO `list` VALUES ('94', '花果山 新疆库尔勒精品香梨 2.5kg', '59.90', 'img/shui4.jpg', '1783');
INSERT INTO `list` VALUES ('95', '方家铺子 新疆红枣灰枣 500g', '39.90', 'img/tui1.jpg', '1846');
INSERT INTO `list` VALUES ('96', '方家铺子 南北山珍干货五福齐全礼盒 826g', '169.00', 'img/tui2.jpg', '1909');
INSERT INTO `list` VALUES ('97', '兰格维特Lungavita 特级初榨橄榄油礼盒 1L*2', '148.00', 'img/tui3.jpg', '1972');
INSERT INTO `list` VALUES ('98', '柴火大院 五常稻花香大米 5kg', '69.90', 'img/tui4.jpg', '2035');
INSERT INTO `list` VALUES ('99', '爱氏晨曦 Arla 全脂牛奶 200ml*24', '69.90', 'img/tui5.jpg', '2098');
INSERT INTO `list` VALUES ('100', '茅台醇封坛原浆 私藏级 52度500ml', '168.00', 'img/tui6.jpg', '2161');
INSERT INTO `list` VALUES ('101', '伊桐 经典优选赤霞珠红葡萄酒双支木盒装 750ml*2', '128.00', 'img/tui7.jpg', '2224');
INSERT INTO `list` VALUES ('102', '欧瑞安 奥兰国际象棋干红葡萄酒 750ml*6', '228.00', 'img/tui8.jpg', '2287');
INSERT INTO `list` VALUES ('103', 'U选一品 抽肠大带鱼 580g', '35.80', 'img/tui9.jpg', '2350');
INSERT INTO `list` VALUES ('104', 'Champmar 厄瓜多尔白虾 40/50 1kg', '98.00', 'img/tui10.jpg', '2413');
INSERT INTO `list` VALUES ('105', '泰国烤椰COCONUT 1个装 单果400-500g 新品尝鲜！', '15.00', 'img/list_1.jpg', '2476');
INSERT INTO `list` VALUES ('106', '山东烟台红富士苹果12枚装 单果85mm', '38.00', 'img/list_2.jpg', '2539');
INSERT INTO `list` VALUES ('107', '果缤纷 进口优选蓝莓 125g*4盒', '61.00', 'img/list_3.jpg', '2602');
INSERT INTO `list` VALUES ('108', '果缤纷 墨西哥优选牛油果6粒 买一赠一 实发12粒 约1250g', '84.00', 'img/list_4.jpg', '2665');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'chen', 'd477887b0636e5d87f79cc25c99d7dc9');
INSERT INTO `users` VALUES ('2', 'cheng', 'dc483e80a7a0bd9ef71d8cf973673924');
INSERT INTO `users` VALUES ('3', 'aicc', 'dc483e80a7a0bd9ef71d8cf973673924');
INSERT INTO `users` VALUES ('4', 'cheng1', 'dc483e80a7a0bd9ef71d8cf973673924');
SET FOREIGN_KEY_CHECKS=1;

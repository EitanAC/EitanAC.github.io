---
title: "跟踪巨鲸的市场冲击行为的量化策略"
published: 2025-09-01
updated: 2025-09-01
draft: false
description: "本文通过市场大单冲击的非线性特征从而捕捉异常状态来识别巨鲸"
image: "/assets/whale-trading.jpg"
tags: ["量化交易", "区块链", "巨鲸跟踪", "量化策略"]
category: "量化金融"
lang: "zh-CN"
pinned: true
author: "Eitan"
---

# 跟踪巨鲸的市场冲击行为的量化策略

## 引言

在 **Bouchaud, Farmer & Lillo (2009)**《How markets slowly digest changes in supply and demand》[文章](https://www.inet.ox.ac.uk/publications/how-markets-slowly-digest-changes-in-supply-and-demand?utm_source=chatgpt.com)中主要展示两个观点:

- 价格并不是顺时反映供需，而是逐步消化巨量订单
- 巨鲸行为会在盘口留下痕迹，这些痕迹可以被数据捕捉并量化

本文探讨大单冲击这一行为

## 大单冲击的非线性特征

### 观测事实

实证上市场上的标的所观察到的大单冲击常常近似为：

$$\Delta p \propto Q^{\delta}$$

其中：
- $\Delta p$ 表示价格冲击，是同期的中间价(mid-price)位移，其中 $p_{mid}=\frac{p_{best\ bid}+p_{best\ ask}}{2}$
- $Q$ 表示执行量
- $\delta$ 为冲击指数，通常 $\delta \approx 0.4\sim 0.6$

### 简单的数学推导

将Limit Order Book(LOB)在mid-price之上的供给看作价格-供给的密度曲线 $\rho(p)$。假设我们从中价 $p_{0}$ 向上扫单，买入 $Q$ 使价格从 $p_{0} \rightarrow p_{0}+\Delta p$ 并且满足：

$$Q = \int_{p_{0}}^{p_{0}+\Delta p}\rho(p)dp$$

若附近的供给密度可做幂律型近似：

$$\rho(p) \approx C(p-p_{0})^{\alpha}, \quad \alpha \geq 0$$

积分得到：

$$Q = C\int_{0}^{\Delta p}x^{\alpha}dx = \frac{C}{\alpha+1}(\Delta p)^{\alpha+1}$$

解出 $\Delta p$：

$$\Delta p \approx \left(\frac{\alpha+1}{C}Q\right)^{\frac{1}{\alpha+1}} \Rightarrow \Delta p \propto Q^{\delta}, \quad \delta = \frac{1}{\alpha+1}$$

- 若 $\alpha=0$ (即密度在mid附近为常数)，则 $\delta=1$ (线性冲击)
- 若 $\alpha=1$ (即密度在mid附近为线性增长)，则 $\delta=\frac{1}{2}$ (平方根冲击)

这里的**直观**含义就是当mid附近的挂单稀少而随着价格距离增加，挂单越来越多，这就导致了 $\Delta p$ 对 $Q$ 的增长是**迟滞的、次线性**的。

(我是更新分割线)

## 参考文献

1. Bouchaud, J. P., Farmer, J. D., & Lillo, F. (2009). How markets slowly digest changes in supply and demand. *Handbook of Financial Markets: Dynamics and Evolution*, 57-160.

---

**本文仅供学术研究参考，不构成投资建议。量化交易存在风险，请谨慎投资。**


---
title: 快速轻量的带宽测量·NSDI '21
date: 2021-12-25
description:
author: ahacad
cover: ""
published: false
---

本文要介绍的是 NSDI 2021 的会议论文 —— [Fast and Light Bandwidth Testing for Internet Users](https://www.usenix.org/conference/nsdi21/presentation/yang-xinlei)，该论文实现了一个新的带宽测量系统，包括服务端和用户段，比起传统的测量方法能够节省大量的流量和带宽。

我本人之前在 Google Cloud 上跑带宽测试的时候曾犯过一个很蠢的错误直接把预算跑完了，看到这篇文章还是很有感触的；传统大家去测带宽往往是用些著名的服务，比如 Wifi 大师，speedtest 什么的，但是这些服务效果层次不齐，而且如果带宽较大的话 (比如 5G) 测一次带宽的流量费就能让人哭出来，本文详细调查了现有的各大带宽测试服务，同时自己搭建了一套全新的带宽测量方法，来节省时间和流量。



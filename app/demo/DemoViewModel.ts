/*
 *  Copyright (C) 2017 OrionStar Technology Project
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { BaseViewModel } from 'orionos-eve-core';
import { DemoModel } from './DemoModel';

/**
 * 业务逻辑
 */
export class DemoViewModel extends BaseViewModel {

    /**
     * 数据模块
     */
    private mModel: DemoModel;

    /**
     * 构造函数
     */
    public constructor() {
        //super参数为ViewModel与Trigger相互通信的标识，必须保证与Trigger的一致
        super('Demo');
        this.mModel = new DemoModel();
    }

    /**
     * 任务开始
     */
    public onStart(): void {

    }

    /**
     * 任务结束
     */
    public onStop(): void {

    }

    /**
     * 点击换一换
     */
    public onPressChangeText = (): void => {
        if (this.mModel.getInfoText() === 'Hello Robot!') {
            this.mModel.setInfoText('你好，机器人！');
        } else {
            this.mModel.setInfoText('Hello Robot!');
        }
    };

    public getInfoText(): string {
        return this.mModel.getInfoText();
    }
}

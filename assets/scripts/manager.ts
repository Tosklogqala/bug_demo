// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class manager extends cc.Component {
	// @property(cc.Label)
	// label: cc.Label = null;

	@property(cc.Node) root: cc.Node = null;

	// LIFE-CYCLE CALLBACKS:

	// onLoad () {}

	start() {
		let rotpart = this.root.getChildByName('rotpart');
		let flipxpart = this.root.getChildByName('flipxpart');
		let flipypart = this.root.getChildByName('flipypart');
		setInterval(() => {
			rotpart.angle += 5;
			rotpart.getComponent(cc.ParticleSystem).resetSystem();
			flipxpart.getComponent(cc.ParticleSystem).resetSystem();
			flipypart.getComponent(cc.ParticleSystem).resetSystem();
		}, 800);
	}

	// update (dt) {}
}

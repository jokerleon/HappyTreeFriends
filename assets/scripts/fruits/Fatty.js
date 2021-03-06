cc.Class({
    extends: cc.Component,

    properties: {
        owner: null,
    },

    // use this for initialization
    onEnable () {
        this.owner = this.node.getComponent('Wrom');
        this.node.scaleX = this.node.scaleY = 1.8;
        this.owner.eatRadius = 20;

        this.scheduleOnce(this.end, 12);
    },

    end () {
        this.node.scaleX = this.node.scaleY = 1;
        if (this.owner) {
            this.owner.eatRadius = 0;
            this.owner.removeFruit();
            this.owner = null;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

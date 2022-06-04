window.dragon = {
  /// after unity instace loaded, this method will be called by unity object(dragonEventHandler)
  initialize: function () {
    var root = document.getElementById('root');
    root.style.display = 'block';
  },

  walletConnect: async function (address) {
    console.log("call walletConnect")
    window.dragon.walletAddress = address.toString();
    if (unityInstance != undefined) {
      await window.dragon.getSignMessage()
      console.log("signedMessage", window.dragon.signedMsg)
      unityInstance.SendMessage('DragonWeb3Connector', 'WalletConnected', address.toString() + '|' + window.dragon.signedMsg);
    }
  },

  checkWalletConnect: async function () {
    console.log("call checkwalletconnect")
    if (window.dragon.walletAddress != undefined) {
      await window.dragon.getSignMessage()
      console.log("signedMessage", window.dragon.signedMsg)
      unityInstance.SendMessage('DragonWeb3Connector', 'WalletConnected', window.dragon.walletAddress + '|' + window.dragon.signedMsg);
    }
  }
}

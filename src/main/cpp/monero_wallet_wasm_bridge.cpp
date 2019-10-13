#include <iostream>
#include "monero_wallet_wasm_bridge.h"
#include "wallet/monero_wallet_dummy.h"
#include "wallet/monero_wallet.h"

using namespace std;
using namespace monero_wallet_wasm_bridge;

int monero_wallet_wasm_bridge::create_wallet_random(const string& path, const string& password, int network_type, const string& daemon_uri, const string& daemon_username, const string& daemon_password, const string& language) {
    cout << "create_wallet_random() called!!!" << endl;
//  monero_rpc_connection daemon_connection = monero_rpc_connection(daemon_uri, daemon_username, daemon_password);
//  monero_wallet* wallet = monero_wallet::create_wallet_random(path, password, static_cast<monero_network_type>(network_type), daemon_connection, language);
//  return (int) wallet;
    monero_wallet_dummy* wallet = new monero_wallet_dummy();
    return (int) wallet;
}


int monero_wallet_wasm_bridge::create_wallet_dummy() {
  monero_wallet_dummy* wallet = new monero_wallet_dummy();
  return (int) wallet;
}

void monero_wallet_wasm_bridge::dummy_method(int handle) {
  monero_wallet_dummy* wallet = (monero_wallet_dummy*) handle;
  wallet->dummy_method();
}
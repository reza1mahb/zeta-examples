import { expect } from "chai";
import { networkVariables } from "../lib/CrossChainWarriors.constants";

describe("lib tests", () => {
  describe("CrossChainWarriors.constants", () => {
    describe("bsctestnet", () => {
      it("Should have the correct variables", () => {
        expect(networkVariables.bsctestnet.MPI_ADDRESS).to.equal(
          "0x96cE47e42A73649CFe33d93D93ACFbEc6FD5ee14"
        );
        expect(networkVariables.bsctestnet.ZETA_TOKEN_ADDRESS).to.equal(
          "0x4Ce8B40F7b64Ce5A5EbAc2349BAb6Ea0EBCC2240"
        );
      });
    });

    describe("goerli", () => {
      it("Should have the correct variables", () => {
        expect(networkVariables.goerli.MPI_ADDRESS).to.equal(
          "0x132b042bD5198a48E4D273f46b979E5f13Bd9239"
        );
        expect(networkVariables.goerli.ZETA_TOKEN_ADDRESS).to.equal(
          "0x88Be1F872F0A9B04961eBf3f8Bb998417EE8D54E"
        );
      });
    });
  });

  describe("CrossChainWarriors.helpers", () => {
    //
  });
});
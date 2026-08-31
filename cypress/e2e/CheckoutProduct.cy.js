import LoginPages from "../pages/LoginPages";
import ProductPages from "../pages/ProductPages";
import CheckoutPages from "../pages/CheckoutPages";

const TEST_DATA = "TestData_1";
const TEST_SHEET = "Sheet1";

const data = require(`../fixtures/generated/${TEST_DATA}_${TEST_SHEET}.js`);
describe("End to End Flow Checkout", () => {
  data.forEach((row) => {
    it(`${row.TC_ID} - Checkout`, () => {
      cy.visit("/");
      LoginPages.login(row.USER, row.PASS);

      if (row.ITEM?.trim()) {
        const products = row.ITEM.split(",");
        cy.wrap(products).each((nama) => {
          ProductPages.addToCart(nama.trim());
        });
      }

      if (row.REMOVE?.trim()) {
        ProductPages.removeCart(row.REMOVE.trim());
      }

      ProductPages.cart();
      CheckoutPages.checkout();
      CheckoutPages.fillData(row.NAME, row.LASTNAME, row.POSTALCODE);
    });
  });
});

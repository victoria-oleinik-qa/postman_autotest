// autotest for method https://swapi.dev/api/people/10/

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 300ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(300);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.mass).to.eql("77");
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("blue-gray");
});

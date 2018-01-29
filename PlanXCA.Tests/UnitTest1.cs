using Microsoft.VisualStudio.TestTools.UnitTesting;
using PlanXCA.Controllers;

namespace PlanXCA.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            AddClass obj = new AddClass();
            var sum = obj.AddClassm(2, 3);
            Assert.AreEqual(5, sum);
        }
    }
}

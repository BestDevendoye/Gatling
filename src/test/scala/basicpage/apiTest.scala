package basicpage

import io.gatling.core.Predef.Simulation
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
class apiTest  extends  Simulation{


  val httpconf = http.baseUrl("https://reqres.in")

  val scn = scenario("demo get api")
    .exec(http("GET API SINGLE").get("/api/users?page=2").check(status.is(200)))



  setUp(scn.inject(atOnceUsers(1)).protocols(httpconf))

}

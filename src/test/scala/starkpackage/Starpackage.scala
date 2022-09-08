package starkpackage

import io.gatling.core.Predef.Simulation
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class Starpackage  extends Simulation{

  val httpProtocol = http.baseUrl("https://api.openbrewerydb.org")

  val scn = scenario("findbreweryb")
    .exec(http("all_breweries").get("/breweries").check(status.is(200),substring("Indiana").exists))
    .pause(5)
    .exec(http("one_breweries").get("/breweries/10-56-brewing-company-knox").check(status.is(200),responseTimeInMillis.lte(1600)))




  setUp(scn.inject(atOnceUsers(2)).protocols(httpProtocol))

}

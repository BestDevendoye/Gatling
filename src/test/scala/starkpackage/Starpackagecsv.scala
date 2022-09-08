package starkpackage

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*
import io.gatling.jdbc.Predef.*

import scala.concurrent.duration.*

class Starpackagecsv  extends Simulation{

  val httpProtocol = http.baseUrl("https://api.openbrewerydb.org")
  val csvbrowsr = csv("C:/Users/daoud/Downloads/Gatling/demo_gatling/src/test/resources/data/browsercv.csv").eager.circular

  val scn = scenario("findbreweryb")
    .feed(csvbrowsr)
    .exec(http("all_breweries").get("/breweries").check(status.is(200),substring("Indiana").exists))
    .pause(5)
    .exec(http("one_breweries").get("/breweries/${browwserid}").check(status.is(200),responseTimeInMillis.lte(1600)))




  setUp(scn.inject(atOnceUsers(2)).protocols(httpProtocol))

}

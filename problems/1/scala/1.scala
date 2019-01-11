import scala.math._

object HelloWorld {

    val n = 1000

    // Simple solution using modulo arithmetic
    def sumMultipleModulo(number: Int, factors: List[Int]): Int = {
        var sum = 0

        for (n <- 1 to number) {
            if (factors exists { n % _ == 0}){
                sum = sum + n
            }
        }
        sum
    }

    // Using formulae for arithmetic progressions
    def sumMultipleFormula(number: Int, factors: List[Int]): Int = {
        def sumFactor(f: Int):Int = { 
            var s = floor(number / f)
            var l = f + ((s - 1) * f)
            var sum = s * (f + l) / 2
            sum.toInt
        }
        factors.map(sumFactor).reduce(_ + _) - sumFactor(factors.reduce(_ * _))
    }

    def main(args: Array[String]): Unit = {
        val sum = sumMultipleModulo(n, List(3,5))
        println(sum)
        val sum2 = sumMultipleFormula(n, List(3,5))
        println(sum2)
    }
}
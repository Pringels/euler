import scala.math._

object HelloWorld {

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

    // Simple solution using modulo arithmetic
    def sumMultipleFormula(number: Int, factors: List[Int]): Int = {
        val sumFactor = (f:Int):Int => {
            val s = loor(number / f)
            val l = f + ((s - 1) * f)
            val sum = s * (f + l) / 2
        }
        sumFactor(1)
    }

    // Using formulae for arithmetic progressions
    def main(args: Array[String]): Unit = {
        val sum = sumMultipleModulo(10, List(3,5))
        println(sum)
    }
}
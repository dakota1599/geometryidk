// A Vector represents a point in "n" dimensional space.
// This class provides calculation methods for vectors.
export class Vector{

    vector: number[]

    constructor(vector: number[]){
        this.vector = vector
    }

    // Nonstatic functions
    // --------------------------------------------------
    
    toString(){
        var result = "("
        for(var i = 0; i < this.vector.length; i++){
            result += `${this.vector[i]}`
            if(i+1 == this.vector.length){
                result += ")"
                return result
            }
            result += ", "
        }
    }

    scale(val: number){
        this.vector = this.vector.map((vec) => vec * val)

        return this
    }

    add(v: Vector){
        Vector.validateDimension(this, v)

        this.vector = Vector.add(this, v).vector

        return this
    }

    dotProduct(v: Vector){
        return Vector.dotProduct(this, v)
    }

    magnitude(){
        return Vector.magnitude(this)
    }


    // Static functions
    // --------------------------------------------------

    static dotProduct(a: Vector, b: Vector){
        this.validateDimension(a, b)
        var total = 0
        for(var i = 0; i < a.vector.length; i++){
            total += (a.vector[i] * b.vector[i])
        }

        return total;
    }

    static add(a: Vector, b:Vector){
        this.validateDimension(a,b)

        var result = new Array<number>(a.vector.length)

        for(var i = 0; i < a.vector.length; i++){
            result[i] = (a.vector[i] + b.vector[i])
        }

        return new Vector(result)
    }

    static magnitude(a: Vector){
        var total = 0;

        a.vector.forEach((val) => {
            total += (val*val)
        })

        return Math.sqrt(total)
    }

    static validateDimension(a: Vector, b: Vector){
        if(a.vector.length != b.vector.length){
            throw new Error("Vectors must be of the same dimension.")
        }
    }
}
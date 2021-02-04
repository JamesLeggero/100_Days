// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
    let count = 0
    //north
    // let north = r_q
    // while (north <= n) {
    //     for (let i = 0; i < k; i++){
    //         if (north < obstacles[i][0] && c_q !== obstacles[i][1]) {
    //             count++
    //         }
    //     }
    //     north++
    // }
    //south
    let south = r_q
    while (south >= 1) {
        for (let i = 0; i < k; i++){
            if (south > obstacles[i][0] && c_q !== obstacles[i][1]) {
                count++
            }
        }
        south--
    }
    
    
    
    
    
    
    
    return count
    


}
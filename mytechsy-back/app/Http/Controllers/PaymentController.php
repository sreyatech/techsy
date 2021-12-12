<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;

class PaymentController extends Controller
{ 
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function instamojo($user_id,$pro_id,$name,$purpose,$amount,$phone,$email)
    {

        $amount = round($amount * 75.01);

        $ch = curl_init();

                    curl_setopt($ch, CURLOPT_URL, 'https://test.instamojo.com/api/1.1/payment-requests/');
                    curl_setopt($ch, CURLOPT_HEADER, FALSE);
                    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
                    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
                    curl_setopt($ch, CURLOPT_HTTPHEADER,
                                array("X-Api-Key:test_0d440efc3c55e51c7c8c6e636be",
                                    "X-Auth-Token:test_8a332004300c127dfa19c0b8716"));
                    $payload = Array(
                        'purpose' => $purpose,
                        'amount' => $amount,
                        // 'phone' => $phone,
                        'buyer_name' => $name,
                        'redirect_url' => 'http://127.0.0.1:8000/api/redirect',
                        'send_email' => true,
                        // 'webhook' => 'http://www.example.com/webhook/',
                        // 'send_sms' => true,
                        'email' => $email,
                        'allow_repeated_payments' => false
                    );
                    curl_setopt($ch, CURLOPT_POST, true);
                    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
                    $response = curl_exec($ch);
                    curl_close($ch); 
                    $response = json_decode($response);
                    return redirect($response->payment_request->longurl);
    }

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


public function redirect(){
    
    $pay = new Payment;
        if($_GET['payment_status'] == "Credit"){
            $pay->pid = $_GET['payment_id'];
            $pay->status = $_GET['payment_status'];
            $pay->save();
            return redirect("http://127.0.0.1:8000/api/TechSy/".$pay['pid']."/".$pay['status']);

        }else{
            echo 'no';
        }

    //     $payment = new Payment;

    //     $data = $_POST;
    //             $mac_provided = $data['mac'];  // Get the MAC from the POST data
    //             unset($data['mac']);  // Remove the MAC key from the data.
    //             $ver = explode('.', phpversion());
    //             $major = (int) $ver[0];
    //             $minor = (int) $ver[1];
    //             if($major >= 5 and $minor >= 4){
    //                 ksort($data, SORT_STRING | SORT_FLAG_CASE);
    //             }
    //             else{
    //                 uksort($data, 'strcasecmp');
    //             }
    //             // You can get the 'salt' from Instamojo's developers page(make sure to log in first): https://www.instamojo.com/developers
    //             // Pass the 'salt' without <>
    //             $mac_calculated = hash_hmac("sha1", implode("|", $data), "ff10843931d243819e3b62e2442f4fac");
    //             if($mac_provided == $mac_calculated){
    //                 if($data['status'] == "Credit"){
    //                     $payment->name = $data['buyer_name'];
    //                     $payment->save();
    //                     return $payment;
    //                 }
    //                 else{
    //                     // Payment was unsuccessful, mark it as failed in your database.
    //                     // You can acess payment_request_id, purpose etc here.
    //                 }
    //             }
    //             else{
    //                 echo "MAC mismatch";
    //             }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function paymentStore($pid,$status)
    {
        // echo 'pid : '.$pid;
        // echo 'status : '.$status;
        // $data = array('pid'=> $pid,
        // 'status'=> $status);
        // return $data;
        return view('thankyou',['pid'=>$pid,'status'=>$status]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

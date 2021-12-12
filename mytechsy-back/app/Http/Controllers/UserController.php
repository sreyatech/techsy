<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return 'hola khana khake jana...';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $req)
    {
        if(empty($req->name) || empty($req->email)){
            return response([
                'message' =>["please fill all the fields..."],
            ],202);
        }
        else if(isset($req->name) && isset($req->email)){

            $validator = $req->validate([
                'email' => 'email',
                'phone' => ''
            ]);

            if($validator){
                $user = new User;
                $user->name = $req->name;
                $user->email = $req->email;
                $user->phone = $req->phone;
                $user->password = Hash::make($req->password);
                $user->save();
            return response([
                'message' =>["your data has been saved and we will contact with you soon..."],
                'user' => $user
            ],200);
            }  else{
                return response([
                        'message' =>["please enter a valid email id or refresh the page and try again..."],
                    ],203);
            }

    }
  }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function login(Request $req)
    {
        if(empty($req->email) || empty($req->password)){
            return response([
                'message' =>["please fill all the fields..."],
            ],201);
        }else  {
            $user = User::where('email',$req->email)->first();
            if(!$user || !Hash::check($req->password,$user->password)){
                return response([
                    'message' =>["Email or Password doesn't mathched..."],
                ],202);
            }elseif($user || Hash::check($req->password,$user->password)){
                return response([
                    'message' =>["Thank you for coming back..."],
                    'user' => $user
                ],200);
            }
        }
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

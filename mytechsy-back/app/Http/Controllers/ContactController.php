<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Validation\ValidationException;
use App\Http\Requests;
use Illuminate\Contracts\Validation\Validator;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function contact(Request $req)
    {        
        if(empty($req->name) || empty($req->email)){
            return response([
                'message' =>["please fill all the fields..."],
            ],202);
        }
        else if(isset($req->name) && isset($req->email)){

            $validator = $req->validate([
                'email' => 'email',
            ]);
            
            if($validator){
                $contact = new Contact;
                    $contact->name = $req->name;
                    $contact->email = $req->email;
                    $contact->subject = $req->subject;
                    $contact->message = $req->message;
                    $contact->save();
            return response([
                'message' =>["your data has been saved and we will contact with you soon..."],
            ],200);
            }
        }else{
            return response([
                    'message' =>["please enter a valid email id or refresh the page and try again..."],
                ],203);
        }
        
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
    public function store(Request $request)
    {
        //
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
